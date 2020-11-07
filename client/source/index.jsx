import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateCount: 1,
      owner: {},
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
          console.log(this.state.dateOne)
        })
        axios.get(`http://ec2-3-15-177-95.us-east-2.compute.amazonaws.com:3003/project-owner/${newId}`)
        .then((result) => {
          // console.log('results', result)
          this.setState({
            owner: {
              name: result.data.name,
              iconUrl: result.data.iconUrl,
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      axios.get(`http://ec2-3-128-76-202.us-east-2.compute.amazonaws.com:3007/updates/${newId}`)
      .then( (inc) => {
          console.log('amazon' + inc.data)
          this.setState(inc.data);
        })
      axios.get(`http://ec2-3-15-177-95.us-east-2.compute.amazonaws.com:3003/project-owner/${newId}`)
      .then((result) => {
        // console.log('results', result)
        this.setState({
          owner: {
            name: result.data.name,
            iconUrl: result.data.iconUrl,
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  render () {
    if (this.state.updateCount === 1) {
      return (
        <div>
          <div className="update-container">
            <div className="update-head">
            <div className="uCount">Update #1</div>
            <h1 className="update-title">{this.state.header}</h1>
            <img className="icon" src={this.state.owner.iconUrl} alt="owner"/>
            <div className="update-name">{this.state.owner.name}</div>
            <div className="update-date">{this.state.dateOne}</div>
            </div>
            <div className="update-body">
            <p className="para">{this.state.paragraph}</p>
            </div>
            <div className="update-foot">
                <i id="update-message" className='fas fa-comment-alt'></i>
              <div className="update-like">
                <div className="heart"></div>
              </div>
              <div className="update-read">Read more</div>
            </div>
          </div>
            <div className="update-box">
            <img className="image" src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="lemon"/>
              <div className="image-text">Project Launches Dec 2020</div>
            </div>
        </div>
      )
    }

    if (this.state.updateCount === 2){
      return (
        <div>
          <div className="update-container">
            <div className="update-head">
            <div className="uCount">Update #2</div>
            <h1 className="update-title">{this.state.secondHeader}</h1>
            <img className="icon" src={this.state.owner.iconUrl} alt="owner"/>
            <div className="update-name">{this.state.owner.name}</div>
            <div className="update-date">{this.state.dateTwo}</div>
            </div>
            <div className="update-body">
            <p className="para">{this.state.secondParagraph}</p>
            </div>
            <div className="update-foot">
                <i id="update-message" className='fas fa-comment-alt'></i>
              <div className="update-like">
                <div className="heart"></div>
              </div>
              <div className="update-read">Read more</div>
            </div>
          </div>

          <div className="update-container">
            <div className="update-head">
            <div className="uCount">Update #1</div>
            <h1 className="update-title">{this.state.header}</h1>
            <img className="icon" src={this.state.owner.iconUrl} alt="owner"/>
            <div className="update-name">{this.state.owner.name}</div>
            <div className="update-date">{this.state.dateOne}</div>
            </div>
            <div className="update-body">
            <p className="para">{this.state.paragraph}</p>
            </div>
            <div className="update-foot">
                <i id="update-message" className='fas fa-comment-alt'></i>
              <div className="update-like">
                <div className="heart"></div>
              </div>
              <div className="update-read">Read more</div>
            </div>
          </div>




            <div className="update-box">
            <img className="image" src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="lemon"/>
              <div className="image-text">Project Launches Dec 2020</div>
            </div>
        </div>
      )
    }

  }
}

ReactDOM.render(<App />, document.getElementById('updates'));