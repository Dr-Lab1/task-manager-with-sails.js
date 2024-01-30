/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async create(req, res){
        try {
           
            let params = req.allParams();

            if(!params.name)
                res.badRequest({error : "name field is required"});
            if(!params.status)
                res.badRequest({error : "status field is required"});

            const result = await Task.create({
                "name": params.name,
                "description": params.description,
                "status": params.status
            });

            return res.ok({result : result});
            
        } catch (error) {
                return res.serverError(error);
        }
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

