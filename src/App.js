
import React from 'react';

import {
  connect
} from 'react-redux';

import axios from 'axios';
import { Link } from 'react-router';
import { addImages, getImages } from './actions';

/* --- COMPONENTS --- */
class App extends React.Component {

  componentDidMount = () => {
    var self = this;
    axios.get('https://demo0813639.mockable.io/getPanos')
      .then(function (response) {
        self.props.onDataReceive(response.data);
      }).catch(error => console.log(error));
  }

  render() {
    const data = this.props.images;
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

/* --- STORE --- */
function mapStateToProps(state) {
  return {
    images: state.images
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDataReceive: (images) => {
      dispatch(addImages(images))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);