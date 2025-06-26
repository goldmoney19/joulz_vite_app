import bcrypt from "bcrypt";
import User from "../model/User.js";
import generateToken from "../utils/jwtUtils.js";

const authService = async(email, password) => {

     try{
         const existingUser = await User.findOne({email});

         if(!existingUser){

            console.log("email dosent exist");
         }
      
         const isPasswordValid = await bcrypt.compare(password, existingUser.password);

         if(!isPasswordValid){
          console.log('password not valid');
          throw new error("password not valid");

         }
        const token = generateToken(existingUser);
        return token;

      }
     catch(error){
         console.log(error.message)
           throw new error("invalid credentials");
     }

}




export default authService