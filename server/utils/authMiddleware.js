import jwt from "jsonwebtoken"
import secretKey from "../configuration/jwtConfig.js"


function authMiddleware(req, res, next){

     const authHeader = req.header("Authorization");
     if(!authHeader){
          return res.status(401).json({message:"missing token"});
     }
     
     const [bearer, token] = authHeader.split(" ");
     if(bearer !== "Bearer" || !token){

          return res.status(401).json({message:"invalid token format"});
     }
         const decoded = jwt.verify(token, secretKey, (err, user) =>{
          req.user = decoded;
           if(err){

return res.status(401).json({message:"forbidden:invalid token"});
           }
             req.user = user;
             next();
         });
}


export default authMiddleware;