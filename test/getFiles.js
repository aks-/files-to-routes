const { test } = require('tap')
const { resolve, join } = require('path')
const getFiles = require('../lib/getFiles')

test('should return full path of all the javascript files in a directory recursively', t => {
  const expected = [
    join(__dirname, '/../fixtures/testdir/foo.js'),
    join(__dirname, '/../fixtures/testdir/bar/baz.js')
  ]

  const files = getFiles(resolve(__dirname, '../fixtures'))

  expected.forEach(f =>
    t.ok(files.indexOf(f) > -1)
  );

  t.end()
})
