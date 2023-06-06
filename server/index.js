import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose' ;
import cors from 'cors';
import multer from 'multer';
// import fs from 'fs'
// import IncidentsModel from './models/incidents';
import { IncidentsModel } from "./server/models/incidents";



const app = express();
app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());

// app.use(multer({ dest: './uploads/',
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));





const CONNECTION_URL = 'mongodb+srv://dall-e:Dall-e@cluster0.1coqkli.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000 ;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL)
    .then(
    ()=> app.listen(PORT , ()=>console.log('Server running on port 5000'))
    )
    .catch((err)=> console.log(err.message));

// app.post('/photo',function(req,res){
//         var newItem = new Item();
//         newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//         newItem.img.contentType = 'image/png';
//         newItem.save();
//       });



    //   export const createPost = async (req, res) => {
    //     const { title, message, selectedFile, creator, tags } = req.body;
    
    //     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    
    //     try {
    //         await newPostMessage.save();
    
    //         res.status(201).json(newPostMessage );
    //     } catch (error) {
    //         res.status(409).json({ message: error.message });
    //     }
    // }

// app.post('/addIncident',async (req,res)=>{
//     const newIncident = new IncidentsModel(req.body);

//     try{
//         await newIncident.save();

//         res.status(201).json(newIncident);
//     }catch (error) {
//                 res.status(409).json({ message: error.message });
//             }
    
// })



