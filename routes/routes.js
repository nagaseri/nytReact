var Article = require("../models/Article");
var express = require("express");

var app = express()

app.get("/api/saved" , (req,res) => {

    console.log("Get")

    Article.find({}, (err,doc) => {

        if(err){

            console.log(err)
        }
        else{
            res.send(doc)
        }
    });
});

app.post("/api/saved" , (req,res) => {

    var newArticle = new Article(req.body)

    newArticle.save((err,doc) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
});

app.delete("/api/saved", (req,res) => {
    Article.remove({
      _id: req.body.id
    }).then((doc) => {
      res.send(doc);
    }).catch((err) => {
      res.send(err);
    });
  });