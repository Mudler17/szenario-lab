import test from 'node:test';
import assert from 'node:assert/strict';

import { exampleScenario } from './exampleScenario.js';

const ALLOWED_TYPES = ['communication', 'dependency', 'influence', 'conflict', 'support', 'unclear'];
const ALLOWED_STRENGTHS = ['low', 'medium', 'high', 'unclear'];
const ALLOWED_QUALITIES = ['supportive', 'neutral', 'strained', 'unclear'];

test('exampleScenario relationships use only allowed option values', () => {
  for (const relationship of exampleScenario.relationships) {
    assert.ok(ALLOWED_TYPES.includes(relationship.type), `Unexpected relationship type: ${relationship.type}`);
    assert.ok(ALLOWED_STRENGTHS.includes(relationship.strength), `Unexpected relationship strength: ${relationship.strength}`);
    assert.ok(ALLOWED_QUALITIES.includes(relationship.quality), `Unexpected relationship quality: ${relationship.quality}`);
  }
});
