import React from "react";

// Include Link component from react router
var Link = require("react-router").Link;

class Form extends React.Component {
	render() {
		return (
			<div className="container">
		        <div className="col-lg-12">
		          <div className="panel panel-primary">
		            <div className="panel-heading">
		              <h3 className="panel-title">Search & Results</h3>
		            </div>
		            <div className="panel-body">
		              <p>I'm child 1!</p>
	
		              {/* This code will allow us to automatically dump the correct GrandChild component */}
		              {this.props.children}
		              
		            </div>

		          </div>
		        </div>
		    </div>
		);
	}
};

export default Form;