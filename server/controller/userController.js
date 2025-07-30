import bcrypt from "bcrypt"
import authService from "../services/authService.js"
import generateToken from "../utils/jwtUtils.js";
import User from "../model/User.js";
import product from "../model/Product.js";




export const create = async(req, res) =>{
    try{
         
           
//            const userExists = await User.findOne({email});
//            if(userExists){
               
//  return res.status(400).json({message: "user already exists"});
//            }

          
          const newUser = new User({
               email:req.body.email,
               password:req.body.password
          });

          const password = newUser.password
          const email = newUser.email

          const hash = await bcrypt.hash(password,10);
           console.log(password);
          console.log(hash);
              
          newUser.email = newUser.email;
           newUser.password = hash;

          
          
          const savedData = await newUser.save();
          // res.status(200).json(savedData);
          res.status(200).json({message:"user created successfully"});

    }catch(error){
     res.status(500).json({errorMessage:error.message})

    }
}



export const login = async(req, res) => {

  try {
          const {email, password} = req.body;
          //  const token = await authService(email, password);
          // console.log(token)
          //  res.status(200).json({token:existingUser._id});
          
           
  const existingUser = await User.findOne({email});

         if(!existingUser){

            throw new error("email dosent exist");
         }
      
         const isPasswordValid = await bcrypt.compare(password, existingUser.password);

         if(!isPasswordValid){
          console.log('password not valid');
          throw new error("password not valid");

         }
        const token =  generateToken(existingUser);
       
        console.log(token)
        console.log(existingUser._id)
           res.status(200).json({token:token, userId:existingUser._id, useRole:existingUser.role, useEmail:existingUser.email});
          
      }
  catch(error){
     console.log(error.message)
     res.status(500).json({message:"invalid credentials"})
 }


}

export const getAllUsers = async(req, res) => {

    try{
     const userData = await User.find();

    //  if(!userData || userData.length < 0){

    //     return res.status(404).json({message:"user data not found"})
    //  }
       res.status(200).json(userData);

    }
   
    catch(error){
         console.log(error)
          res.status(500).json({errorMessage: error.message})
           
    }
}

export const getUserById = async(req, res) => {

           try{
                  const id = req.params.id;
                 const  UserExist = await User.findById(id);

                if(!UserExist){

                  return  res.status(404).json({message:"user not found"});
                }
                  res.status(200).json(UserExist);

           }
         catch(error){ 
           res.status(500).json({errorMessage:error.message});
  }
}

export const deleteUserById = async(req, res) => {

          try{

            const id = req.params.id;
            const userExist = await User.findById(id);
            if(!userExist){

                return res.status(404).json({message:"user cannot be found"}); }
               await User.findByIdAndDelete(id);
               res.status(200).json({message:"user has been deleted"}); 

          }
           catch(error){

              res.status(500).json({errorMessage:error.message})
           }
}

export const updateUserByid = async(req, res) =>  {
       
    try{
          const id = req.params.id;

          const userExist = await User.findById(id);
          if(!userExist){

            return res.status(404).json({message:"user does not exist"});
          }

         const updatedData=  await User.findByIdAndUpdate(id, req.body, {

            new:true
          })
             res.status(200).json(updatedData);
    }
      catch{


      }



}


export const addToCart = async(req, res) =>  {
     
  const {productId, quantity, storedUserId} = req.body;
   console.log(, productId, quantity) ;
    const  _idd = req.body.user_id
  

      // res.send("cart add");

try{
   const userr = await User.findById( _idd);

   console.log(userr);

   if(!userr){
    console.log("user not present");
    res.status(400).json({'message':'user not present'});
   }
         userr.cart.push({productId, quantity:quantity || 1});
         await userr.save();
         res.json(userr.cart)
      
}
catch(error){

    console.log(error);
}

}


export const getUserCart = async(req, res) =>  {
    
  

  try{
    const _idd = req.body.user_id;

   const _user = await User.findById(_idd).populate("cart.productId");
  //  const cart = _user.cart || [];

  
   res.status(200).json(_user);
  }
  catch(error){
console.log(error);

  }
}



export const deleteSingleCart = async(req, res) => {

                  try { 
                     const {userr, product_id } = req.body;
                  

                
                //  console.log(userr);      

              const user =await User.findById(userr);
              

            // console.log(user?.cart);
            //   console.log(product_id);

            user.cart = user.cart.filter(item => item.productId.toString() !== product_id);
              await user.save();
                
              const carta =  await user.populate('cart.productId');
              console.log(carta.cart)
              res.status(200).json({cart:carta.cart});
                
                }catch(error){

console.log(error);
                }

}
