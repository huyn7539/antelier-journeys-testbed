// Synthetic smoke scenario for the CI-receipt transport, not external app value.
const test = require('node:test');
const assert = require('node:assert/strict');
const { acceptance } = require('./acceptance.cjs');
test('configured acceptance remains Ready', () => assert.equal(acceptance(), 'Ready'));
