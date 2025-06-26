import jwt from "jsonwebtoken"
import secretKey from "../configuration/jwtConfig.js"
 
const verifyToken = (req, res, next) => {

  const  accessToken = req.cookies['access-token'];
  if(!accessToken) return res.status(400).json({error:"user not authenticated"})

    try{

   const validToken = jwt.verify(accessToken, secretKey);
   if(validToken){
       req.authenticated = true;
       return next();

   }
    }
    catch(err){
        console.log(err)
return res.status(400).json({error:err})

    }
}


export default verifyToken;