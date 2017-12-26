const lowercase = require('lower-case')
const registerExpressHandler = require('./registerExpressHandler')
const registerHapiHandler = require('./registerHapiHandler')

module.exports = (server, routes, framework = 'express') => {

  routes = routes.filter(route => route.handler != {})

  routes.forEach(r => {
    switch (framework) {
      case 'express':
        registerExpressHandler(server, r)
        break;
      case 'hapi': 
        registerHapiHandler(server, r)
        break;
    }
  })

}

