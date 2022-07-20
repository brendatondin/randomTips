import  express from "express";
import controllerUser from "./controllers/controller.js";
import db from "./database/db.js";

const app = express() 
const port = 3000

app.use(express.json())//importar o middleware

controllerUser(app, db)

app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})