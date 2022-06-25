const express = require('express');
const path = require('path');
const app = express();

//public folder
app.use(express.static(__dirname + '/public'));

//all files in view
const fs = require('fs');

const all_files =  async() => {
    let data;
    await fs.readdir("./view",  async(err, files) => {
        data = await files;
    });

    return data;
}

let send_file = (filename) => {
    return path.join(__dirname , "view/" , filename);
}

app.get("/dashboard" , (req , res) => {
    res.sendFile(send_file("dashboard.html"));
})

app.get("/" , (req , res) => {
    res.sendFile(send_file("main1.html"));
})

app.get("/editor" , (req , res) => {
    let pathx = path.join(__dirname , "view/" , "Editor.html");
    res.sendFile(send_file("editor.html"));
})

app.get("/info" , (req, res) => {
    res.sendFile(send_file("info.html"));
})

app.get("/login" , (req, res) => {
    res.sendFile(send_file("Login.html"));
})

app.get("/profile" , (req, res) => {
    res.sendFile(send_file("profile.html"));
})

app.get("/signup" , (req, res) => {
    res.sendFile(send_file("Signup.html"));
})

app.get("/support" , (req, res) => {
    res.sendFile(send_file("support.html"));
})

app.listen(6501, (err) => {
    if(!err) console.log("yay");
    else console.err("probleyma grava");
})
