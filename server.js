const hbs = require("hbs");
const express = require("express");

let app = express();
let port = process.env.PORT || 8000;

app.use(express.static("assests"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


app.get("/", (req, res) => {
    res.render("index");
});



app.listen(port, () => {
    console.log(`listenning tot port ${port}`);
})