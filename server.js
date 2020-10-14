const express = require("express")
const app = express();

app.get("/posts", (req,res) => {
    res.send("Hello World")
})

    app.listen(3001, function(){
    console.log("server is running on port 3001")
})