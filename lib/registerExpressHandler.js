const httpMethods = require('node-http-methods')

module.exports = (server, route) => {
  const path = route.path
  const handler = route.handler

  if (typeof handler != 'function' && typeof handler != 'object')
    throw new Error('Module should export either a function or object');

  if (typeof handler == 'function') {
    server.get(path, handler)
  } else {
    const methods = Object.keys(handler)
      .map(method => lowercase)
      .filter(method => httpMethods.indexOf(method) > -1)

    methods.forEach(method => {
      server[method](path, handler[method])
    })
  }

}

