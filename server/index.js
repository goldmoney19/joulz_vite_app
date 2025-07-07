import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import produkt from "./routes/productRoute.js"
 import portf from "./routes/portfolioRoute.js"
 import checkoutRoute from "./routes/orderRoute.js"
 import cors from "cors"
import multer from  "multer"
import cookieParser from "cookie-parser"
import paymentRoute from "./routes/paymentRoute.js"
import path from "path";
import upload from "./services/upload.js"
// import upload from "./configuration/multerConfig.js"

// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
  origin: 'https://joulz-vite-app.vercel.app', // <-- Make sure it has https://
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
const corsOptions = {
  origin: 'https://joulz-vite-app.vercel.app', // <-- Replace with your actual Vercel frontend URL
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));




// app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

// app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });


const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
     .connect(MONGOURL)
     .then(()=> {

        console.log("db connected successfully")
        app.listen(PORT, () => {

            console.log(`server is running on port:${PORT}`)
        });
     })
     .catch((error) => console.log(error));
   
     app.use("/api/", route);
     app.use("/authService", route);

       app.use("/api", upload.fields([
      {name:'image', maxCount:10},
      {name:'multipleImages', maxCount:10}

    ]), portf);
       
        app.use("/portDisp", portf);
       
    app.use("/api",  produkt);
    
      app.use("/shops",  produkt);

      app.use("/check",  checkoutRoute);

      app.use("/api/payment",  paymentRoute);
