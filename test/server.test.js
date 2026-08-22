const test = require('node:test');
const assert = require('node:assert');

test('AI-Agent-Company payload validator', () => {
    const payload = { company: 'TechCorp', agentRole: 'Researcher' };
    assert.strictEqual(typeof payload.company, 'string');
});
