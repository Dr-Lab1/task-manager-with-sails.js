/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    "GET    /tasks" : "TaskController.find",
    "POST   /task" : "TaskController.create",
    "GET    /task/:id" : "TaskController.finOne",
    "PUT    /task/:id" : "TaskController.update",
    "PATCH  /task/:id" : "TaskController.update",

};
