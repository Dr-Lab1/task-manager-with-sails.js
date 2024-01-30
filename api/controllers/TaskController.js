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

            return res.ok(result);
            
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
        try {
            let id = req.params.id;
            if(!id)
                return res.badRequest({error : "id field is required"});

            const result = await Task.findOne({id: id});

            if (result) {
                return res.ok(result);
            } else {
                return res.notFound();
            }


        } catch (error) {
            return res.serverError(error);
        }
    },

    async update(req, res){
        try {
            let params = req.allParams();
            let attributes = {};

            if(!params.id)
                return res.badRequest({error : "id field is required"});
            if(!params.name)
                return res.badRequest({error : "name field is required"});
            if(!params.status)
                return res.badRequest({error : "status field is required"});

            attributes.name = params.name;
            attributes.status = params.status;

            if(params.description)
                attributes.description = params.description;

            const result = await Task.update({id : params.id}, attributes);
            
            return res.ok(result);

        } catch (error) {
            return res.serverError(error);
        }
    },

    async delete(req, res){
        try {
            await Task.delete({id:res.params.id});
            return res.ok();
        } catch (error) {
            return res.serverError(error);
        }
    }
};

