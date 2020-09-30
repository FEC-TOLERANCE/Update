import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Search from './components/Search.jsx';
// import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateData: []
    }

  }

  // componentDidMount() {
  //   console.log('on load');
  //   this.update();
  // }

  // update () {
  //   console.log('sending get req for updates')
  //   $.ajax({
  //     type: "GET",
  //     url: "/updates",
  //     success: data => {
  //       console.log('Succesfully completed get req for updates', data);
  //       this.setState({updateData: data})
  //     }
  //   });
  // }

  // search (term) {
  //   console.log(`${term} was searched`);
  //   $.ajax({
  //     type: "POST",
  //     url: "/repos",
  //     data: JSON.stringify({"term":term}),
  //     contentType: 'application/json',
  //     success: () => {
  //       console.log('Succesful post');
  //       this.update();
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>This is the Updates</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('target'));