const { readdirSync } = require('fs')
const { resolve, extname, basename } = require('path')
const { debuglog } = require('util')

const debug = debuglog('files-to-routes')

const getFiles = (dir) => {

  debug('getting files from dir ', basename(dir))

  const filenames = readdirSync(dir, 'utf8')
  const directories = filenames.filter(name => extname(name) === '')

  const files = filenames.filter(name => extname(name) === '.js')
    .map(name => resolve(dir, name))

  if (directories.length === 0) return files

  directories.forEach(name => {
    const _dir = resolve(dir, name)
    getFiles(_dir).forEach(name => {
      files.push(resolve(_dir, name))
    })

  })
  
  return files

}

module.exports = getFiles
