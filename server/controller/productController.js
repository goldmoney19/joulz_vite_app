import Product from "../model/Product.js";
import path from 'path';



export const create = async(req, res) => {
      // const {title, description,price } = req.body;
    console.log(req.file);
try{
             
             const title = req.body.title;
             const description = req.body.description;
              const smallDescription = req.body.smallDescription;
             
              const price = req.body.price;
              
                const keyword = req.body.keyword;
                 const image = req.files.image[0];
         const multipleImage = req.files.multipleImages.map(file => path.posix.join('uploads', file.filename));
              
              const imagePath = path.posix.join('uploads', image.filename);

                 const newprodukt =  new Product({title:title, description:description,smallDescription:smallDescription,
                         price:price, keyword:keyword, image:imagePath, multipleImages:multipleImage})
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