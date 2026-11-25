const assert = require('node:assert/strict')
const test = require('node:test')
const { assignQuery } = require('../src')
test('assignQuery merges, overrides, and encodes query entries', () => {
    assert.equal(assignQuery({search: '?keep=one&edit=two'}, {edit: 'a b'}), 'keep=one&edit=a%20b')
})
test('assignQuery rejects a missing search property', () => {
    assert.throws(() => assignQuery({}, {}), /location need search property/)
})
