import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const Api_Key = "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658&manga=4199";


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(Api_Key);
        res.render("index.ejs", {
            results : result
        });
    } catch (error) {
        console.log(error.response);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`server is listening on port ${3000}`);
});