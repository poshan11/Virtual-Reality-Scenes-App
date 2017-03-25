import React from 'react';
import {
    connect
} from 'react-redux';

import { withRouter } from 'react-router';

import {addImages ,getImages} from './actions';

import 'aframe';
// import {Entity, Scene} from 'aframe-react';

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image : ''
        }
    }

    componentDidMount(){
        const { splat } = this.props.params,
                image  = this.props.images ? this.props.images[splat].pano : false;
        this.setState({
            image : image
        });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                 <a-scene>
                    <a-sky src={this.state.image} rotation="0 -130 0"></a-sky>
                </a-scene>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        images: state.images
    };
}
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(actions, dispatch);
// }


const mapDispatchToProps = (dispatch) => {
    return {
        clickedImage: () => {
          dispatch(getImages())
        }
    }
}

Sample = withRouter(connect(mapStateToProps, mapDispatchToProps)(Sample));
export default Sample;

// store.subscribe(mapStateToProps);
