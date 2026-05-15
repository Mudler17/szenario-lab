import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createDecisionNoteDraft } from './createDecisionNoteDraft.js';

const REQUIRED_KEYS = [
  'decisionPoint',
  'options',
  'centralDifferences',
  'targetConflicts',
  'criticalAssumptions',
  'openQuestions',
  'nextClarificationStep',
  'boundaries'
];

const ARRAY_FIELDS = [
  'options',
  'centralDifferences',
  'targetConflicts',
  'criticalAssumptions',
  'openQuestions',
  'boundaries'
];

test('returns stable decision note structure with expected field types', () => {
  const result = createDecisionNoteDraft({});

  assert.equal(typeof result.decisionPoint, 'string');
  assert.ok(Array.isArray(result.options));
  assert.ok(Array.isArray(result.centralDifferences));
  assert.ok(Array.isArray(result.targetConflicts));
  assert.ok(Array.isArray(result.criticalAssumptions));
  assert.ok(Array.isArray(result.openQuestions));
  assert.equal(typeof result.nextClarificationStep, 'string');
  assert.ok(Array.isArray(result.boundaries));
});

test('uses placeholders for missing data and keeps required fields non-empty', () => {
  const result = createDecisionNoteDraft();

  assert.ok(result.decisionPoint.length > 0);
  assert.ok(result.options.length > 0);
  assert.ok(result.boundaries.length > 0);
  assert.ok(result.nextClarificationStep.length > 0);
});

test('handles null input with stable non-empty required structure', () => {
  const result = createDecisionNoteDraft(null);

  for (const key of REQUIRED_KEYS) {
    assert.equal(key in result, true);
    assert.notEqual(result[key], null);
    assert.notEqual(result[key], undefined);
  }

  assert.ok(Array.isArray(result.boundaries));
  assert.ok(result.boundaries.length > 0);
});

test('handles undefined input with stable required structure', () => {
  const result = createDecisionNoteDraft(undefined);

  for (const key of REQUIRED_KEYS) {
    assert.equal(key in result, true);
    assert.notEqual(result[key], null);
    assert.notEqual(result[key], undefined);
  }
});

test('all array fields only contain non-empty strings', () => {
  const result = createDecisionNoteDraft({
    interventions: [{ name: ' Option A ' }, { name: 'Option B' }],
    strategies: [{ name: 'Strategie C' }],
    assumptions: [{ name: 'Annahme D' }]
  });

  for (const field of ARRAY_FIELDS) {
    assert.ok(Array.isArray(result[field]), `${field} must be array`);

    for (const value of result[field]) {
      assert.equal(typeof value, 'string', `${field} values must be strings`);
      assert.notEqual(value, '', `${field} values must not be empty`);
      assert.notEqual(value, null, `${field} values must not be null`);
      assert.notEqual(value, undefined, `${field} values must not be undefined`);
    }
  }
});

test('contains exactly required keys without extras', () => {
  const result = createDecisionNoteDraft({});

  const keys = Object.keys(result).sort();
  const expected = [...REQUIRED_KEYS].sort();
  assert.deepEqual(keys, expected);
});

test('reads draft values defensively for decision point and options', () => {
  const result = createDecisionNoteDraft({
    goal: 'Pilotumfang entscheiden',
    interventions: [{ name: 'Governance-Check' }, { name: 'Team-Review' }],
    strategies: [{ name: 'Schrittweiser Rollout' }],
    assumptions: [{ name: 'Akzeptanz im Team bleibt stabil' }]
  });

  assert.equal(result.decisionPoint, 'Pilotumfang entscheiden');
  assert.deepEqual(result.options, ['Governance-Check', 'Team-Review', 'Schrittweiser Rollout']);
  assert.deepEqual(result.criticalAssumptions, ['Akzeptanz im Team bleibt stabil']);
});

test('does not mutate the input draft', () => {
  const scenarioDraft = {
    name: 'Originalname',
    interventions: [{ id: 'i1', name: 'Option A' }]
  };

  const before = JSON.parse(JSON.stringify(scenarioDraft));
  createDecisionNoteDraft(scenarioDraft);

  assert.deepEqual(scenarioDraft, before);
});

test('contains no recommendation/automation fields', () => {
  const result = createDecisionNoteDraft({});

  assert.equal('score' in result, false);
  assert.equal('ranking' in result, false);
  assert.equal('recommendation' in result, false);
  assert.equal('decision' in result, false);
});

test('avoids forbidden directive language in output strings', () => {
  const forbidden = [
    'optimal',
    'alternativlos',
    'empfohlen',
    'beste option',
    'risikofrei',
    'jetzt entscheiden',
    'sofort umsetzen',
    'objektiv besser',
    'sollte gewählt werden',
    'keine weitere prüfung nötig',
    'entscheidung ist reif',
    'entscheide jetzt',
    'direkt entscheiden',
    'ohne weitere analyse',
    'zweifelsfrei besser'
  ];

  const result = createDecisionNoteDraft({});
  const text = [
    result.decisionPoint,
    ...result.options,
    ...result.centralDifferences,
    ...result.targetConflicts,
    ...result.criticalAssumptions,
    ...result.openQuestions,
    result.nextClarificationStep,
    ...result.boundaries
  ]
    .join(' ')
    .toLowerCase();

  for (const word of forbidden) {
    assert.equal(text.includes(word), false, `must not include: ${word}`);
  }
});

test('keeps next clarification step narrow and neutral', () => {
  const result = createDecisionNoteDraft({});

  assert.equal(typeof result.nextClarificationStep, 'string');
  assert.ok(result.nextClarificationStep.trim().length > 0);
  assert.equal(result.nextClarificationStep.toLowerCase().includes('empfehl'), false);
  assert.equal(result.nextClarificationStep.toLowerCase().includes('automatisch'), false);
});

test('returns boundaries as independent array instance', () => {
  const a = createDecisionNoteDraft({});
  const b = createDecisionNoteDraft({});

  assert.notEqual(a.boundaries, b.boundaries);
  assert.ok(a.boundaries.length > 0);
  assert.ok(b.boundaries.length > 0);
});

test('does not access browser persistence/network globals', () => {
  const restore = [];

  const installThrowingGetter = (name) => {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, name);
    restore.push(() => {
      if (descriptor) {
        Object.defineProperty(globalThis, name, descriptor);
      } else {
        delete globalThis[name];
      }
    });

    Object.defineProperty(globalThis, name, {
      configurable: true,
      get() {
        throw new Error(`${name} must not be accessed`);
      },
    });
  };

  const installThrowingFunction = (name) => {
    const original = globalThis[name];
    restore.push(() => {
      if (typeof original === 'undefined') {
        delete globalThis[name];
      } else {
        globalThis[name] = original;
      }
    });

    globalThis[name] = () => {
      throw new Error(`${name} must not be called`);
    };
  };

  installThrowingGetter('localStorage');
  installThrowingGetter('sessionStorage');
  installThrowingGetter('indexedDB');
  installThrowingFunction('fetch');
  installThrowingFunction('XMLHttpRequest');
  installThrowingFunction('axios');

  try {
    assert.doesNotThrow(() => {
      createDecisionNoteDraft({
        name: 'Test',
        interventions: [{ name: 'Option A' }],
      });
    });
  } finally {
    while (restore.length > 0) {
      const restoreFn = restore.pop();
      restoreFn();
    }
  }
});

test('source contains no forbidden persistence/browser/api patterns', () => {
  const currentFile = fileURLToPath(import.meta.url);
  const sourcePath = path.join(path.dirname(currentFile), 'createDecisionNoteDraft.js');
  const source = fs.readFileSync(sourcePath, 'utf8');

  const forbiddenPatterns = [
    'localStorage',
    'sessionStorage',
    'indexedDB',
    'fetch(',
    'XMLHttpRequest',
    'axios',
    '/export',
    '/import',
    '/persistence',
    'openai',
    'OpenAI',
    'document.',
    'window.',
    'navigator.',
  ];

  for (const pattern of forbiddenPatterns) {
    assert.equal(source.includes(pattern), false, `source must not include: ${pattern}`);
  }
});
