import mongoose from “mongoose”;
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    defaultValue: Date.now
  },
  url: {
    type: String
  },
  body: {
  	type: String
  }
});

const Article = mongoose.model(“Article”, ArticleSchema);
export default Article;