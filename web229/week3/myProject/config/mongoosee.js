const config = require('./env/development')
const mongoose = require('mongoose')

/**
 * Before we can start using the User model,we need to include the user.server.model.js file in 
 * Moogoose configuration file in order to register the User model
 * 
 * Make sure that this mongoose configuration file is loaded before any other configuration is performed
 * in the server.js file, 
 * this is important since any module that is loaded after this module will be able to use the
 * User model without loading it by itself
 */
module.exports = function(){
    const db = mongoose.connect(config.db)
    require('../app/models/user.server.model')
    return db
}
