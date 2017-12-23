const { resolve, basename } = require('path')
const { debuglog } = require('util')

const debug = debuglog('files-to-routes')

module.exports = (dir, f) => {
  const route = getRoute(dir, f)
  const handler = require(f)

  return {
    route,
    handler
  }

}

const getRoute = (dir, f) => {
  const basedirname = basename(dir)

  debug('remove the part in front of path which needs to be route url')

  const tillbasedirname = resolve(__dirname, dir).length - (basedirname.length + 1)

  return f.slice(tillbasedirname, -3)
}
