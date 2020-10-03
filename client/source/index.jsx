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
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('target'));