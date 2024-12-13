const UserSchema = require('../models/userModel');

const getUser = async(req, res) => {
    try{
        console.log('heyyyyyy');

        const page = req.query.page || 1;
        const limit = 10;
        const totalUsers = UserSchema.countDocuments()  || 30;
        const totalPages = Math.ceil(totalUsers/limit);
        const nextPage = page < totalPages ? page+1 : null;
        // const createdUser = await UserSchema.skip((page - 1) * limit).limit(limit);

        res.status(200).send({ 
            status:true, 
            msg:'User has been created', 
            // data: createdUser, 
            page,
            limit,
            // totalUsers,
            totalPages,
            nextPage,
        })

    } catch(err){
        res.status(500).send({ status: false, msg: 'fail'});
    }
}

module.exports = {
    getUser,
};