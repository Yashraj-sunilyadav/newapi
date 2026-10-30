import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.render("index.ejs",{})
});


app.post('/search', (req, res) => {
  console.log(req.body.place); 
  res.send(`wait till we send the ${req.body.place}  `)
});


app.post('/filter', (req, res) => {
  
 res.send(`the filter that is cklciked is ${req.body.region}`)
});




app.listen(port,()=>{
    console.log(`app is running on ${port}`);
})
