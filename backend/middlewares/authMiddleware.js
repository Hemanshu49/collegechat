const jwt = require("jsonwebtoken");
const User = require("../modles/userModel.js");
const asyncHandler = require ("express-async-handler");

const protect  = asyncHandler (async (req ,res ,next) =>{
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded =jwt.verify (token , process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");
            next();
        }catch(error){
            console.log(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token){
        return res.status(401).send({msg: "No Token provided"});

    }
});

module.exports= {protect};