import jwt from "jsonwebtoken";
const verifyJWT = async (req, res, next) => {
    try{
        if(req.header && req.header("Authorization")){
            const token = await req.header("Authorization").split(" ")[1];
            const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
            if(verified) req.user = verified;
            next();

        } 
        else res.status(400).json({message: "No Token Received!"});
    } catch(err) {
        res.status(403).json({message: "Unauthorized!"});
    }
};
export default verifyJWT;