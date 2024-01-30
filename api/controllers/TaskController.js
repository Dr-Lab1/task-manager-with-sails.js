/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async create(req, res){

    },
    
    async find(req, res){
        try {
            const tasks = await Task.find();
            return res.ok(tasks);
        } catch (error) {
            return res.serverError(error);
        }
    },

    async findOne(req, res){

    },

    async update(req, res){

    },

    async delete(req, res){

    }
};

