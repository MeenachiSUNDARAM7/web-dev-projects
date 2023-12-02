import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const Api_Key = "https://pro-api.coingecko.com/api/v3/";


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(Api_Key + "/ping");
        res.render("index.ejs",{results : result});
    }
})

app.listen(port, () => {
    console.log(`server is listening on port ${3000}`);
})