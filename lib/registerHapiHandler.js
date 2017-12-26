module.exports = (server, route) => {
  const handler = route.handler

  if (handler.method) server.route(handler)
  else Object.keys(handler).forEach(function(h) {

    if (typeof h == 'object') {
      console.log(h)
      server.route(h)
    }

  })

}
