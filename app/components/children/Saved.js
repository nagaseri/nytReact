import React from 'react';
import Helpers from '../utils/helper';
import deletePanel from '../panels/deletePanel';

class Saved extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
		
	}
	componentDidMount() {
		Helpers.getSaved().then((res) => {
			console.log(res.data);
			this.setState({articles: res.data});
		})
	}
	handleButtonClick(event) {
		console.log("click delete");
		console.log(event);
		var g = event.target.id;
		console.log("var g: " + g);
		Helpers.deleteArticle(g);
		
	}
	render() {
		return (
			<div className="container">
		    <div className="col-lg-12">
		     <div className="panel panel-primary">
		      <div className="panel-heading">
		       <h3 className="panel-title">Saved Articles</h3>
		      </div>
		      <div className="panel-body">
		       Saved Articles
				    <div>
					    {this.state.articles.map((article, i) => (
					    	<div className="panel panel-default">
					  			<div className="panel-heading">
					    			<h3 className="panel-title">{article.title}</h3>
					  			</div>
					  			<div className="panel-body">
					        	{article.body}
					        		<div id={i}>
										<button id={article._id}
											onClick={this.handleButtonClick}
											className="btn btn-danger" value={article._id}>
											Delete
										</button>
									</div>
					        </div>
					      </div>
					    ))}
				    </div>
		      </div>
		     </div>
		    </div>
		  </div>
		)
	}
}

export default Saved;
import React from 'react';
import Helpers from '../../../utils/helpers';
import deletePanel from '../../panels/deletePanel';

class Saved extends React.Component {
	constructor() {
		super();
		this.state = {
			saved: []
		}
		this.getSaved = this.getSaved.bind(this);
		this.renderSaved = this.renderSaved.bind(this);
	}
	componentDidMount() {
		this.getSaved();
	}
	getSaved() {
		Helpers.getSaved().then((res) => {
			this.setState({ saved: res.data });
		});
	}
  // A helper method for rendering one panel for each quote
  renderSaved() {
    return this.state.saved.map(saved => (
      <deletePanel
        saved={saved}
        key={saved._id}
        getSaved={this.getSaved}
      />
    ));
  }
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Saved Articles</h3>
				  	</div>
				  	<div className="panel-body">
				  		{this.renderSaved()}
				  	</div>
				</div>
			</div>
		);
	}
}

export default Saved;
