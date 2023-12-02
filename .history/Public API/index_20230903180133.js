import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const Api_Key = "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658&manga=4199";


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`server is listening on port ${3000}`);
});