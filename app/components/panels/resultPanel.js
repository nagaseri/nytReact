import React from "react";
import Helpers from "../utils/helper";

class resultPanel extends React.Component {
	constructor(props) {
		super(props);
		this.saveArticle = this.saveArticle.bind(this);
	}
	saveArticle() {
		Helpers.saveArticle(this.props.article.headline.main, this.props.article.web_url).then((res) => {
			console.log(res);
		});
	}
	render() {
		return (
			<div className="panel panel-default">
	  			<div className="panel-body">
	    			<h4 id="resultListing">
	    				<a href={this.props.article.web_url} target="_blank">{this.props.article.headline.main}</a>
							<br />
							<button
		    				id="saveButton"
		    				className="btn btn-primary"
		    				onClick={this.saveArticle}
		    			>
		    				Save
		    			</button>
	    			</h4>
	  			</div>
			</div>
		);
	}
}

export default resultPanel;