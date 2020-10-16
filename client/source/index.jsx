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
    var newId = window.location.href.split('/')[3];
    axios.get('http://localhost:3007/updates/' + newId)
      .then( (inc) => {
        console.log(inc.data)
        this.setState(inc.data);
      })
  }

  render () {
    return (<div>
      <h1>This is the Updates Component</h1>
    <h2>{this.state.header}</h2>
    <p>{this.state.paragraph}</p>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('updates'));