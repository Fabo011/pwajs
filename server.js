import express from 'express';
const app = express();
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const port = process.env.PORT || 3000;


//require('dotenv').config();



const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + '/website'));


app.use(express.json());


app.get('/', function(req, res){ 
    res.sendFile(__dirname + "/website/html/index.html");
   }); 





app.listen(port, ()=>console.log(`listen on http://localhost:${port}`));
