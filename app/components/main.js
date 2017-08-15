import React from 'react';
import Form from '../components/children/Search/Form';
import Results from '../components/children/Search/Results';
import Saved from '../components/children/Saved';

import helpers from './utils/helper';

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

  setSearch(term,start,end){
    this.setState({
      search: term,
      startYear: start,
      endYear: end
    })
  }

  render() {

      return (

        <div className="container">
          <div className="jumbotron">
            <h2><strong>Scrape the News~</strong></h2>
            <p><em>New News</em></p>
            <hr />
            <p>
              <Link to="/Search"><button className="btn btn-primary btn-lg">Search New Articles</button></Link>
              <Link to="/Saved"><button className="btn btn-success btn-lg">Search Saved Articles</button></Link>
            </p>
          </div>

          <div className="row">

            {this.props.children}

          </div>

        </div>
      )
  }

}

export default Main;