import React from 'react'
import {useState , useEffect} from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function InsertPortfolio(props){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [design, setDesign] = useState("");
    const [image, setImage] = useState("");
    const [multipleImages, setMultipleImages] = useState("");


   
  const navigate = useNavigate();
  
    const handleSubmit  = async(e) => {
                   e.preventDefault();

 
  const formData = new FormData();

formData.append("title",title)
formData.append("description",description)
formData.append("design",design)
formData.append("image",image)
multipleImages.forEach((imaggs)=> formData.append('multipleImages', imaggs))

console.log(title);
console.log(description);
// console.log(price);
console.log(image);
console.log(multipleImages);


// console.log(formData);

                  
                   
                   await axios.post("https://joulz-backend.onrender.com/api/portfolio", formData)
                  .then((response)=>{
                     console.log("portfolio inserted");
                     navigate("/person");
                  })
                  .catch((error)=>{
                    toast.error(error.response.data.message, {position:"top-right"});
                     console.error(error)
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
                    <Nav.Link href ="/insertPortfolio"  >add portfolio</Nav.Link>

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
         <h6>Add Portfolio</h6>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>

         <label></label><br></br>
         <input 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px',width:'300px'}}
         id='title'
         placeholder = 'title'
           type='text'  
          name ="title"
           value = {title} 
           onChange = {(e) => 
            setTitle(e.target.value)
          } 
           />
         <br></br>
         <br></br>

         <label></label><br></br>
         <textarea 
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px',width:'300px'}}
         id="description"
         placeholder = 'description'
          value ={description}
           name = "description"
           onChange = {(e) => 
            setDescription(e.target.value)
          }
           >
           
         </textarea >
        <br></br>
        <br></br>
   <label></label><br></br>
         <textarea
         style = {{backgroundColor:'white',color:'black',borderRadius:'15px',width:'300px'}}
         id="design" 
         placeholder = 'design'
         name = "design"
         value ={design}
           onChange = {(e) => 
            setDesign(e.target.value)
          }
           >
           
         </textarea >

         <br></br>
         <br></br>
         <input type='file' name="image"  onChange={(e) => 
            setImage(e.target.files[0])}/>
<br>
</br><br></br>
        <label>multiple images</label> <input type='file' accept="image/*" multiple name="multipleImages"  onChange={(e) => 
            setMultipleImages(Array.from(e.target.files))}/>
  
<br>
</br><br></br>
         
       
     

        <button  type='submit' className='btn btn-primary'>submit</button>
        <br></br>
       
       
        </form>
  </Col>
 </Row>
       </Container>
          </div>
     }  

     export default InsertPortfolio
