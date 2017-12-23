const { test } = require('tap') 
const { join, resolve } = require('path')
const getPathAndHandlers = require('../lib/getPathAndHandlers');

test('should return obj with route and handler property', t => {
  const dirpath = join(__dirname, '../fixtures')
  const filepath = join(__dirname, '../fixtures/testdir/foo.js')

  const o = getPathAndHandlers(dirpath, filepath)

  t.ok(o.path)
  t.ok(o.handler)
  t.end()

})

test('should return empty obj in handler when file is empty', t => {
  const dirpath = join(__dirname, '../fixtures')
  const filepath = join(__dirname, '../fixtures/testdir/empty.js')

  const o = getPathAndHandlers(dirpath, filepath)

  t.same(o.handler, {})
  t.end()

})

test('route should start with slash and should not have .js extension', t => {
  const dirpath = join(__dirname, '../fixtures')
  const filepath = join(__dirname, '../fixtures/testdir/foo.js')

  const o = getPathAndHandlers(dirpath, filepath)

  t.same(o.path, '/fixtures/testdir/foo')
  t.ok(o.handler)
  t.end()

})

