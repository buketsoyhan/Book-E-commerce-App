import Users from "model/user";

export async function getUserByEmail(req, res) { 
    try {
        const users=await Users.findOne({})
        if(!users)  return res.status(404).json({message:"Data not found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export async function postUser(req, res) { 
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({error:"form data empty"});
        Users.create(formData, function(err, data) {
            return res.status(200).json(data);
        })
    } catch (error) {
        res.status(404).json({message: error.message});
        return;
    }
}