const { resolve, basename } = require('path')
const { debuglog } = require('util')

const debug = debuglog('files-to-routes')

module.exports = (dir, f) => {
  const path = getPath(dir, f)
  const handler = require(f)

  return {
    path,
    handler
  }

}

const getPath = (dir, f) => {
  const basedirname = basename(dir)

  debug('remove the part in front of path which needs to be route url')

  const tillbasedirname = resolve(__dirname, dir).length - (basedirname.length + 1)

  return f.slice(tillbasedirname, -3)
}
