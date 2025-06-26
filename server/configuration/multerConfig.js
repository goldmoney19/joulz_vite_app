import multer from "multer";
import path from "path";
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploadDir = path.join(__dirname, '../uploads');
if(!fs.existsSync(uploadDir)){

    fs.mkdirSync(uploadDir, {recursive:true});
}



const storage = multer.diskStorage({

     destination:(req,file,cb) => {
        cb(null, uploadDir);
     },

     filename:(req, file, cb)=>{

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
     },

});


const  fileFilter = (req, file, cb)=>{

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if(allowedTypes.includes(file.mimetype)){

        cb(null, true);
    }else{
         cb(new Error('only JPEG, PNG, and gif images are allowed'),false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits:{

        fileSize :10 * 8 * 1024 * 1024,
    },

});

export default upload;