import React from 'react'
import {useState , useEffect} from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink, Button} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function InsertProduct(props){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 const [smallDescription, setSmallDescription] = useState("");
  const [price, setPrice] = useState("");
    
    const [keyword, setKeyword] = useState("");
    const [image, setImage] = useState("");
        const [multipleImages, setMultipleImages] = useState("");



 
   
 const navigate = useNavigate();
    const handleSubmit  = async(e) => {
                   e.preventDefault();

 
  const formData = new FormData();
 formData.append("title",title);
formData.append("description",description);
formData.append("smallDescription",smallDescription);
formData.append("price",price);

formData.append("keyword",keyword);
 formData.append("image",image);

const files = e.target.multipleImages.files;
for(let i = 0;i<files.length;i++){

  formData.append('multipleImages',files[i]);
}

for(let pair of formData.entries()){

  console.log(`${pair[0]}: ${pair[1].name}, Size: ${pair[1].size} bytes`)
}


// console.log(title);
// console.log(description);
// console.log(price);
// console.log(image);
// console.log(multipleImages);


                   
                   
                   await axios.post("https://joulz-vite-app-backend.onrender.com/api/product", 
                                    formData,
                                    {
                                    withCredentials: true,
                                   headers:{
                                    "Content-Type":'multipart/form-data'
                        }
                           }
                                   )
                  .then((response)=>{
                     console.log(response);
                     console.log("product inserted");
                    // navigate("/viewProducts");
                  })
                  .catch((error)=>{

                     console.log(error);
                  })

          


    }



     return <div> 

      <Container fluid style = {{paddingTop:'70px'}}>
             <Row>

                       <Col sm = {2} style = {{border:'1px solid grey',height:'450px'}}>
       
        <br></br>
        <div>
        
         <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/admin_dashboard" >Panel</Nav.Link>
        </div>
<br></br>


        <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/viewUsers" >view users</Nav.Link>
        </div>
         <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/insertPortfolio"  >add prortfolio</Nav.Link>

          </div>
          <br></br>

           <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/person" className='btn btn-secondary'>view portfolio</Nav.Link>
          </div> 
           <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/insertProduct" className='btn btn-secondary'>add product</Nav.Link>
            </div>
            <br></br>
             <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/viewProducts" className='btn btn-secondary'>view product</Nav.Link>
                     </div>
                    </div>
              </Col>



                            <Col sm = {10} style = {{border:'1px solid grey',minHeight:'500px', textAlign:'left'}}>

        <br></br>
         <h6>Add Product</h6>
        <form onSubmit={handleSubmit}  encType='multipart/form-data' >

         <label></label><br></br>
         <input 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px',width:'300px'}}
         id='title'
         placeholder = 'title'
           type='text'  
          name ="title"
           value = {title} 
           onChange = {(e) => setTitle(e.target.value)
          } 
           />
         <br></br>
         <br></br>

         <label></label><br></br>
         <textarea 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px', width:'300px'}}
         id="description"
         placeholder = 'description'
          value ={description}
           name = "description"
           onChange = {(e) => 
            setDescription(e.target.value)
          }
           > </textarea >
 <br></br>
         <br></br>
              <label></label><br></br>
         <textarea 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px', width:'300px'}}
         id="smallDescription"
         placeholder = 'small description'
          value ={smallDescription}
           name = "smallDescription"
           onChange = {(e) => 
            setSmallDescription(e.target.value)
          }
           ></textarea>
        
        
        <br></br>
        <br></br>
   <label></label><br></br>
         <input 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px',width:'300px'}}
         id='price'
         placeholder = 'price'
           type='text'  
          name ="price"
           value = {price} 
           onChange = {(e) => 
            setPrice(e.target.value)
          } 
           />

            <br></br>
        <br></br>
           
       
<label></label><br></br>
         <input 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px',width:'300px'}}
         id='keyword'
         placeholder = 'keyword'
           type='text'  
          name ="keyword"
           value = {keyword} 
           onChange = {(e) => 
            setKeyword(e.target.value)
          } 
           />
         <br></br>
         <br></br>
         <input type='file' name="image"  onChange={(e) => 
            setImage(e.target.files[0])}/>

      
        <br>
</br><br></br>
        <label>multiple images</label> <input type='file' accept="image/*" multiple  name='multipleImages'  onChange={(e) => setMultipleImages(Array.from(e.target.files))}/>


        <br></br>
        <br></br>



        <button className = 'btn btn-sm btn-warning'  type='submit' >Insert</button>
        <br></br>
       
       
        </form>
     
     
  </Col>
                 </Row>
                    </Container>
          </div>
     }  

     export default InsertProduct
