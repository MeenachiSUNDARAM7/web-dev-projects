import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const Api_Key = "https://pro-api.coingecko.com/api/v3/ping";


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(Api_Key);
        res.render("index.ejs", {
            results : result
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`server is listening on port ${3000}`);
});