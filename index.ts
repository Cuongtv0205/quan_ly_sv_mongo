import express from "express";
import mongoose from "mongoose";
import {router} from "./src/router/router";
const DB_URL = 'mongodb://localhost:27017/demo_mg';
mongoose.connect(DB_URL).then(() => {
    console.log('Db connected')
})
const app = express();
app.use(express.json())
app.use('', router);
app.listen(3000 , () => {
    console.log('Server is running')
})