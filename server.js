// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var logger = require("morgan");
var Article = require("./models/Article");

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 8080;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
// app.use("/", routes);

// -------------------------------------------------

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Connect mongoose to our database
mongoose.connect(db, (error) => {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// -------------------------------------------------
app.get("/Results" , (req,res) => {

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

app.post("/Results" , (req,res) => {

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

app.delete("/Saved", (req,res) => {
    Article.remove({
      _id: req.body.id
    }).then((doc) => {
      res.send(doc);
    }).catch((err) => {
      res.send(err);
    });
  });

// Listener
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
