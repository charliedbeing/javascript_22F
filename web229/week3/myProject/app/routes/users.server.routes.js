const users= require('../../app/controllers/users.server.controller')

module.exports = function(app){
    app.get('/users',users.list)
    app.post('/users',users.create)
}

