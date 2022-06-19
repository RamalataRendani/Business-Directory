//import
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

//import route file
import route from "./app/routes/routes.js";

//initialising express app
const app = express();

//connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/business_dir_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', ()=>console.log('Database connected'));

app.use(cors());
app.use(express.json());
app.use('/api',route);

const PORT = process.env.PORT || 8081;
//listening to port
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:8081`);
})