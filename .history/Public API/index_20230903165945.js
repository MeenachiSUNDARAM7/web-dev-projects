import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const Api_Key = "https://pro-api.coingecko.com/api/v3/";


app.use(express.static("public"));

app.get(req,res => {
    
})

app.listen(port, () => {
    console.log(`server is listening on port ${3000}`);
})