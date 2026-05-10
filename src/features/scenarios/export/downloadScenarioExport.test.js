import test from 'node:test';
import assert from 'node:assert/strict';

import { downloadScenarioExport } from './downloadScenarioExport.js';

test('gibt missing-export-draft zurück, wenn exportDraft fehlt', () => {
  const result = downloadScenarioExport();

  assert.deepEqual(result, { ok: false, reason: 'missing-export-draft' });
});

test('gibt missing-payload zurück, wenn payload fehlt', () => {
  const result = downloadScenarioExport({ filename: 'export.json' });

  assert.deepEqual(result, { ok: false, reason: 'missing-payload' });
});

test('gibt missing-filename zurück, wenn filename fehlt oder leer ist', () => {
  assert.deepEqual(
    downloadScenarioExport({ payload: { ok: true } }),
    { ok: false, reason: 'missing-filename' },
  );

  assert.deepEqual(
    downloadScenarioExport({ payload: { ok: true }, filename: '   ' }),
    { ok: false, reason: 'missing-filename' },
  );
});

test('gibt download-api-unavailable zurück, wenn Browser-APIs fehlen', () => {
  const result = downloadScenarioExport(
    { payload: { ok: true }, filename: 'export.json' },
    { documentRef: null, BlobRef: null, URLRef: null },
  );

  assert.deepEqual(result, { ok: false, reason: 'download-api-unavailable' });
});

test('gibt payload-not-json-serializable zurück, wenn JSON.stringify fehlschlägt', () => {
  const payload = {};
  payload.self = payload;

  class FakeBlob {
    constructor(parts, options) {
      this.parts = parts;
      this.options = options;
    }
  }

  const link = {
    click() {},
  };

  const documentRef = {
    body: {
      appendChild() {},
      removeChild() {},
    },
    createElement() {
      return link;
    },
  };

  const URLRef = {
    createObjectURL() {
      return 'blob:example';
    },
    revokeObjectURL() {},
  };

  const result = downloadScenarioExport(
    { payload, filename: 'export.json' },
    { documentRef, BlobRef: FakeBlob, URLRef },
  );

  assert.deepEqual(result, { ok: false, reason: 'payload-not-json-serializable' });
});

test('führt Download-Schritte aus und gibt ok-Ergebnis zurück', () => {
  const calls = [];

  class FakeBlob {
    constructor(parts, options) {
      this.parts = parts;
      this.options = options;
      calls.push({ type: 'blob-created', parts, options });
    }
  }

  const link = {
    href: '',
    download: '',
    clickCalled: false,
    click() {
      this.clickCalled = true;
      calls.push({ type: 'clicked' });
    },
  };

  const documentRef = {
    body: {
      appendChild(node) {
        calls.push({ type: 'append', node });
      },
      removeChild(node) {
        calls.push({ type: 'remove', node });
      },
    },
    createElement(tag) {
      calls.push({ type: 'create-element', tag });
      return link;
    },
  };

  const URLRef = {
    createObjectURL(blob) {
      calls.push({ type: 'create-object-url', blob });
      return 'blob:download-url';
    },
    revokeObjectURL(url) {
      calls.push({ type: 'revoke-object-url', url });
    },
  };

  const exportDraft = {
    payload: { id: 'example', nested: { value: 1 } },
    filename: 'scenario-export.json',
  };

  const originalPayload = exportDraft.payload;
  const originalFilename = exportDraft.filename;

  const result = downloadScenarioExport(exportDraft, {
    documentRef,
    BlobRef: FakeBlob,
    URLRef,
  });

  assert.deepEqual(result, { ok: true, filename: 'scenario-export.json' });

  const blobEvent = calls.find((entry) => entry.type === 'blob-created');
  assert.ok(blobEvent);
  assert.equal(blobEvent.options.type, 'application/json;charset=utf-8');
  assert.equal(
    blobEvent.parts[0],
    JSON.stringify(exportDraft.payload, null, 2),
  );

  assert.ok(calls.some((entry) => entry.type === 'create-object-url'));

  const createElementEvent = calls.find((entry) => entry.type === 'create-element');
  assert.ok(createElementEvent);
  assert.equal(createElementEvent.tag, 'a');

  assert.equal(link.href, 'blob:download-url');
  assert.equal(link.download, 'scenario-export.json');
  assert.equal(link.clickCalled, true);

  assert.ok(calls.some((entry) => entry.type === 'append' && entry.node === link));
  assert.ok(calls.some((entry) => entry.type === 'remove' && entry.node === link));

  assert.ok(
    calls.some(
      (entry) => entry.type === 'revoke-object-url' && entry.url === 'blob:download-url',
    ),
  );

  assert.equal(exportDraft.payload, originalPayload);
  assert.equal(exportDraft.filename, originalFilename);
});
