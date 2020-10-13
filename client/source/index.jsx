import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateData: []
    }

  }

  render () {
    return (<div>
      <h1>This is the Updates Component</h1>
    <h2>{this.state.header}</h2>
    <p>{this.state.pragraph}</p>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('updates'));