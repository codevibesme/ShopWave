import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const register = async (req, res) => {
    try{
        const {name, email, password, role } = await req.body;
        const duplicateUser = await User.findOne({email}).exec();
        if(duplicateUser) return res.status(409).json({message: "email already exists"});
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);
        const registerUser = new User({
            name,
            email,
            password: hashedPass,
            role
        });
        const user = await registerUser.save();
        res.status(201).json({user});

    } catch(err) {
        res.status(400).json({message: err.message});
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = await req.body;
        const user = await User.findOne({email}).exec();
        const id = user._id;
        if(!user) return res.status(400).json({message: "Enter valid email!"});
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message: "Enter valid password!"});
        const token = jwt.sign({id: id}, process.env.ACCESS_TOKEN, );
        if(!token) return res.status(403).json({message: "Unauthorized"});
        res.status(200).json({user, token});
    } catch(err) {
        res.status(403).json({message: err.message});
    }

};
