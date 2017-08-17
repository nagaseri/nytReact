import React from 'react';
import Search from './children/Search/Form';
import Results from './children/Search/Results';
import Saved from './children/Saved';

import helpers from '../utils/helpers';

class Main extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      topic: '',
      startYear: '',
      endYear: ''
    }
    this.setParent=this.setParent.bind(this);
  }

  setParent(topic, startYear, endYear) {
    console.log("set Parent working")
    this.setState({
      topic: topic,
      startYear: startYear,
      endYear: endYear
    })
  }

  getSaved() {
    this.child.getSaved();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>Scrub the New York Times!</h1>
            <p><em>Search for articles and annotate articles of interest!</em></p>
            <a href="/Search"><button className="btn btn-default">Search</button></a>
            <a href="/Saved"><button className="btn btn-default">Saved Articles</button></a>
            <a href="/Results"><button className="btn btn-default">Results</button></a>
          </div>
      <div className="container-fluid">
        <Search setParent={this.setParent}/>
        <Results
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          getSaved={this.getSaved}
        />
        <Saved
          ref={instance => { this.child = instance; }}
        />
      </div>
    </div>
  </div>
    );
  }

}

export default Main;