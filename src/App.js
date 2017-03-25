/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

import React from 'react';
// import {connect} from 'react-redux';

import {
  connect
} from 'react-redux';

import axios from 'axios';
import { Link } from 'react-router';
import {addImages ,getImages} from './actions';
// const imageList = $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         data: {},
//         url: "https://demo0813639.mockable.io/getPanos",
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log(jqXHR);
//         },
//         success: function (msg) {
//          return  msg ;
//         }
//     });

// export const imageList = [{"pano":"http://www.360p.co.uk/wp-content/uploads/2011/05/360-panoramas-truro-park-3-1200x600.jpg","name":"Truro Park"},{"pano":"http://www.paris-360.com/pictures/louvre_pyramide_ficheok.jpg","name":"Paris"},{"pano":"http://www.roadtovr.com/wp-content/uploads/2014/09/Venice.Still001.jpeg","name":"Venice"},{"pano":"https://s-media-cache-ak0.pinimg.com/originals/a2/ba/09/a2ba09c212716ae8e5646daf93e1bda6.jpg","name":"Landscape"}];

/* --- COMPONENTS --- */
class App extends React.Component {

  componentDidMount = () => {
    var self = this;
    axios.get('https://demo0813639.mockable.io/getPanos')
      .then(function (response) {
        console.log(response);
        self.props.onDataReceive(response.data);
      }).catch(error => console.log(error));
  }

  render() {
    const data = this.props.images;
        console.log(data);
    return (
      <div>
        <ul>
          {this.props.images.map((image, index) =>
            <Link to={`/sample/${index}`} key={index}>
              <img className="imageContainer" src={image.pano} />
            </Link>
          )}
        </ul>
      </div>
    )
  }
}


/* --- REDUCERS --- */
// export function reducer(state = [], action) {
// 	return state;
// };

/* --- ACTIONS --- */

// const actions = {};


/* --- STORE --- */
function mapStateToProps(state) {
  console.log("dataaa", state);
  return {
    images: state.images
  };
}
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(actions, dispatch);
// }


const mapDispatchToProps = (dispatch) => {
  return {
    onDataReceive: (images) => {
      dispatch(addImages(images))
    }
  }
}


// const store = createStore(reducer, imageList);

/* --- OTHER --- */

// Render the app
// store={store}
/*ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('app')
);*/

export default connect(mapStateToProps, mapDispatchToProps)(App);