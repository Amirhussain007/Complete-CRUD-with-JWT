const jwt=require("jsonwebtoken")
const AuthenticateToken=(req,res,next)=>{
    console.log("invoked")
    const token=req.headers["authorization"]
   console.log(token)
   if(!token){
    return res.status(401).send("unauthorized")
   }

   jwt.verify(token, "Welcome", (err, decoded)=>{
    if(err){
        return res.status(401).send("unauthorized") 
    }
    req.userId=decoded.userId
    next();
   } )
}

module.exports=AuthenticateToken