import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import express from 'express';
import dotenv from 'dotenv';
import nodemon from "nodemon";
dotenv.config();
import user from './routes/user.js'



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', user)


const port = process.env.PORT || 3000;

app.listen(port, '127.0.0.1', ()=>{
    console.log(`Server started on port http://127.0.0.1:${port}`);
});