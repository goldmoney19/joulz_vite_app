import jwt from "jsonwebtoken"
import secretKey from "../configuration/jwtConfig.js"


const generateToken = (user) => {

      const payload = {

        id:user._id,
        email:user.email,
        role:user.role
      }
    return jwt.sign(payload, "p7i3`~Kt6H8xM+67Y%m&$L?}$PXiwR", {expiresIn:"1d"});

};



export default generateToken;
