const UserSchema = require('../models/userModel');

const getUser = async(req, res) => {
    try{
        console.log('heyyyyyy');

        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const totalUsers = await UserSchema.countDocuments();
        const totalPages = totalUsers > limit ? Math.ceil(totalUsers/limit) : 1;
        const nextPage = page < totalPages ? page+1 : null;
        const createdUser = await UserSchema.find().skip((page - 1) * limit).limit(limit);

        res.status(200).send({ 
            status:true, 
            msg:'User has been created', 
            data: createdUser, 
            page,
            limit,
            totalUsers,
            totalPages,
            nextPage,
        })
    } catch(err){
        res.status(500).send({ status: false, msg: 'fail', error: err });
    }
}

const createUser = async (req, res) => {
    try{
        console.log('inside.....')
        const user = new UserSchema({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        
        const userCreated = await user.save();
        res.status(200).send({ status: true, msg:'Success while creating user', data:  userCreated });

    } catch(err){
        res.status(500).send({ status: false, msg: 'error while creating user'})
    }
    

}

module.exports = {
    createUser,
    getUser,
};
