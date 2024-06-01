import jwt from "jsonwebtoken"


const authMiddleware= async (req,res,next) => {

    const {token} =req.headers;
    
    if(!token) return res.json({success:false,message:"Not auth , Login again"});

    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=token_decode.id;
        next();
    }
    catch(err)
    {
        return res.json({success:false,error :err})
    }

}


export default authMiddleware;