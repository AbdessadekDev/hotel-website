import dotenv from "dotenv"; dotenv.config();
import app from "./app";
import debug from "debug"; const serverLog = debug('app:server');
import './config/db/connection';



const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    serverLog(`server running on port: ${port}`);    
})