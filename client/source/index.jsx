import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    var newId = Number(window.location.pathname.replaceAll('/', ''));
    if (window.location.href.indexOf('local') !== -1){
      newId = window.location.href.split('/')[3];
      axios.get('http://localhost:3007/updates/' + newId)
        .then( (inc) => {
          console.log('local' + inc.data)
          this.setState(inc.data);
        })
    }
    else {
      axios.get(`http://ec2-3-128-76-202.us-east-2.compute.amazonaws.com:3007/updates/${newId}`)
      .then( (inc) => {
          console.log('amazon' + inc.data)
          this.setState(inc.data);
        })
    }
  }
/* Graces route:
`http://localhost:3003/project-owner/${projectId}`*/


  render () {
    return (
    <div className="project">
      <h1>Updates</h1>
      <h2 className="head">{this.state.header}</h2>
      <p className="para">{this.state.paragraph}</p>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('updates'));