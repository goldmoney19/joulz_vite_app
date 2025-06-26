import Product from "../model/Product.js";



export const create = async(req, res) => {
      // const {title, description,price } = req.body;
try{
             console.log(req.body);
             const title = req.body.title
             const description = req.body.description
              const price = req.body.price
              
                const keyword = req.body.keyword
                 const image = req.file.path
              

                 const newprodukt =  new Product({title:title, description:description,
                         price:price, keyword:keyword, image:image })
                         const success = newprodukt.save();
                res.status(200).json(success)
               }
catch(error){
 console.log(error);
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
