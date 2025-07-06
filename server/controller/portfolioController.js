import Portfolio from "../model/Portfolio.js";
import path from 'path';
import cloudinary from '../configuration/cloudinary.js'; // Adjust path if needed
import { v4 as uuidv4 } from 'uuid'; // For unique public_id




export const create =  async(req, res) => {
console.log(req.files, 16);
     try{
       
            const title = req.body.title;
             const description = req.body.description;
              const design = req.body.design;
              const { image, multipleImages } = req.files;
                //  const image = req.files.image[0];
         
                 const singleImageResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { public_id: `portfolios/${uuidv4()}`, folder: 'portfolios' },
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
                  { public_id: `portfolios/${uuidv4()}`, folder: 'portfolios' },
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


 //const imagePath = image.path.replace('\\g', '');
         const newportf =  new Portfolio({title:title, description:description,
          design:design, image:singleImageResult.secure_url, multipleImages:multipleImagesResults})
          const success = await newportf.save();
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

export const getAllPortfolio = async(req, res) => {

           try{
       const userData = await Portfolio.find();
       
            if(!userData || userData.length < 0){
               return res.status(404).json({message:"portfolio data not found"})
     }
     res.status(200).json(userData);

                         }
           catch (error) {

                  res.status(500).json({errorMessage:error.message});
 }
}

export const getPortfolioById = async(req, res) => {

               try{

                     const id = req.params.id;
                                     const  UserExist = await Portfolio.findById(id);
                    
                                    if(!UserExist){
                    
                                      return  res.status(404).json({message:"user not found"});
                                    }
                                      res.status(200).json(UserExist);

               }
             catch(error){

              res.status(500).json({errorMessage:error.message});
             }


}

export const deletePortfolioById = async(req, res) => {

try{
   const id = req.params.id;
             const userExist = await Portfolio.findById(id);
             if(!userExist){
 
                 return res.status(404).json({message:"Portfolio cannot be found"}); }
                await Portfolio.findByIdAndDelete(id);
                res.status(200).json({message:"portfolio has been deleted"}); 

}
catch (error) {
res.status(500).json({errorMessage:error.message})

}


   
}


export const updatePortfolioByid = async(req, res) =>  {
       
    try{
          const id = req.params.id;

          const userExist = await Portfolio.findById(id);
          if(!userExist){

            return res.status(404).json({message:"portfolio does not exist"});
          }

         const updatedData=  await Portfolio.findByIdAndUpdate(id, req.body, {

            new:true
          })
             res.status(200).json(updatedData);
    }
     catch (error) {
res.status(500).json({errorMessage:error.message})

      }



}


export const getAllPortfolioDisplay = async(req, res) => {

            try{
       const userData = await Portfolio.find();
       
            if(!userData || userData.length < 0){
               return res.status(404).json({message:"portfolio data not found"})
     }
     res.status(200).json(userData);

                         }
           catch (error) {

                  res.status(500).json({errorMessage:error.message});
 }
}
