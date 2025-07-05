import Product from "../model/Product.js";
import path from 'path';
import cloudinary from '../configuration/cloudinary.js'; // Adjust path if needed
import { v4 as uuidv4 } from 'uuid'; // For unique public_id



export const create = async(req, res) => {
      // const {title, description,price } = req.body;
    console.log(req.file);
try{
             
             const title = req.body.title;
             const description = req.body.description;
              const smallDescription = req.body.smallDescription;
             
              const price = req.body.price;
              
                const keyword = req.body.keyword;
                 const { image, multipleImages } = req.files;
                //  const image = req.files.image[0];
         
                 const singleImageResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { public_id: `products/${uuidv4()}`, folder: 'products' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(image[0].buffer);
    });




    const multipleImagesResults = multipleImages
      ? await Promise.all(
          multipleImages.map(
            (file) =>
              new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                  { public_id: `products/${uuidv4()}`, folder: 'products' },
                  (error, result) => {
                    if (error) return reject(error);
                    resolve({ url: result.secure_url });
                  }
                );
                stream.end(file.buffer);
              })
          )
        )
      : [];

                 const newprodukt =  new Product({title:title, description:description,smallDescription:smallDescription,
                         price:price, keyword:keyword, image:singleImageResult, multipleImages:multipleImagesResults})
                         const success = newprodukt.save();
                res.status(200).json(success)
               }
 catch(error){
         console.error("portfolio create error", {

          message:error.message,
          stack:error.stack,
          file:req.file,
          body:req.body,
         });
        res.status(500).json({errorMessage:error.message});
     }
}



export const getAllProducts = async(req, res) => {

           try{
       const userData = await Product.find();
       
            if(!userData || userData.length < 0){
               return res.status(404).json({message:"product data not found"})
     }
     res.status(200).json(userData);

                         }
           catch (error) {

                  res.status(500).json({errorMessage:error.message});
 }
}

export const getAllShop = async(req, res) => {

           try{
       const userData = await Product.find();
       
            if(!userData || userData.length < 0){
               return res.status(404).json({message:"product data not found"})
     }
     res.status(200).json(userData);

                         }
           catch (error) {

                  res.status(500).json({errorMessage:error.message});
 }
}





export const getProductById = async(req, res) => {

               try{

                     const id = req.params.id;
                                     const  UserExist = await Product.findById(id);
                    
                                    if(!UserExist){
                    
                                      return  res.status(404).json({message:"user not found"});
                                    }
                                      res.status(200).json(UserExist);

               }
             catch(error){

              res.status(500).json({errorMessage:error.message});
             }


}




export const updateProductByid = async(req, res) =>  {
       
    try{
          const id = req.params.id;

          const prodExist = await Product.findById(id);
          if(!prodExist){

            return res.status(404).json({message:"product does not exist"});
          }

         const updatedData=  await Product.findByIdAndUpdate(id, req.body, {

            new:true
          })
             res.status(200).json(updatedData);
    }
     catch (error) {
res.status(500).json({errorMessage:error.message})

      }



}



export const deleteProductById = async(req, res) => {

try{
   const id = req.params.id;
             const userExist = await Product.findById(id);
             if(!userExist){
 
                 return res.status(404).json({message:"Product cannot be found"}); }
                await Product.findByIdAndDelete(id);
                res.status(200).json({message:"product has been deleted"}); 

}
catch (error) {
res.status(500).json({errorMessage:error.message})

}


   
}
