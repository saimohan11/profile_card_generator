import express from 'express';
import router from './routes/card.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(async ()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log(err)
})

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api",router);

mongoose.connection.on("open",()=>{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
    });
})

