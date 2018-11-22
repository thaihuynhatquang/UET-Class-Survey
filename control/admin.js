const knex = require('knex')(require('../dbconfig'))
const admin= require('../model/admin')
const sercure = require('../control/sercure')

module.exports = {
	 getResulftById  : async function (req, res) {
        try{            
            var role=sercure.getToken(req).role
            var course_id=req.body.course_id
            var id=req.body.id
            let result 
            if (role==1)  result=await admin.getResulftById(id,course_id)
            if (result.success==true ){                
                res.send(result)
            }
            res.send({ success: false, error: "not found result" })
        }
        catch(err) {
            res.send({ success: false, error: err.message })
        }
    } ,
}