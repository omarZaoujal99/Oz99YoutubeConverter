const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const getyoutubeid = require("get-youtube-id");
const getYoutubeTitle = require('get-youtube-title');
const { urlencoded } = require("body-parser");


const app = express();
app.use(cors());

app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("Listening to port 3000"); 
})


// var id = getyoutubeid("https://www.youtube.com/watch?v=668nUCeBHyY&ab_channel=Aswant");
// console.log(id);
// getYoutubeTitle(`${id}`,(err,title)=> {
//     console.log(title);
// })


//mp4
app.get("/converToMp4",(req,res)=>{
    var URL = req.query.URL;
    console.log(URL);
    var id = getyoutubeid(`${URL}`);
    console.log(id);
    getYoutubeTitle(`${id}`,(err,title)=> {
        console.log(title);
        // res.header("content-Disposition",`attachment; filename=${title}.mp4`);
        var newtitle = encodeURIComponent(title+".mp4");
        res.setHeader("content-Disposition",`attachment; filename*=UTF-8\'\'`+newtitle);
        ytdl(URL,{
            format: "mp4"
        }).pipe(res);
    })
})

//mp3
app.get("/converToMp3",(req,res)=>{
    var URL = req.query.URL;
    console.log(URL);
    var id = getyoutubeid(`${URL}`);
    console.log(id);
    getYoutubeTitle(`${id}`,(err,title)=> {
        console.log(title);
        var newtitle = encodeURIComponent(title+".mp3");
        res.header("content-Disposition",`attachment; filename*=UTF-8\'\'`+newtitle);
        ytdl(URL,{
            format: "mp3"
        }).pipe(res);
    })
})

