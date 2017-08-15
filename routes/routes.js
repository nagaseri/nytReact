import Articles from "./models/Articles"

import express from "express"

var app = express()

app.get("/" , (req,res) => {

    console.log("Get")

    Articles.find({}, (err,doc) => {

        if(err){

            console.log(err);
        }
        else{
            res.send(doc);
        };
    };
});

app.post("/" , (req, res) => {

    var newArticle = new Articles(req.body)

    newArticle.save((err,doc) => {
       if (err){
       	console.log(err);
       }
       else{
       	res.send(doc);
       }; 
    });
});

app.delete("/", (req, res) => {

	Articles.remove({ _id: req.body.id}, (err, doc) => {
		if (err){
			console.log("Error");
		}
		else{
			res.send(doc);
		};
	});
});