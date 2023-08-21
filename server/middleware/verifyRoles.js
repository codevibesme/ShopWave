import User from "../models/User.js";

export const verifyUserRole = async (req, res, next) => {
    try{

        const {email} = await req.body;
        const user = await User.findOne({email}).exec();
        if(!user) return res.status(400).json({message: "No such user!"});
        if(user.role === 0){
            req.rol=user.role;
            next();
        }
        else res.status(200).json({message: "Only user can access this!"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}
export const verifyAdminRole = async (req, res, next) => {
    try{
        const { email }= await req.body;
        const user = await User.findOne({email}).exec();
        if(!user) return res.status(400).json({message: "No such user!"});
        if(user.role === 1){
            res.role = user.role;
            next();
        }
        else res.status(200).json({message: "Only admin can access this!"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}