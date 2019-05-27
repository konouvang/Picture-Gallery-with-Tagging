import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'

class Carousel extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGES',
        });
    }

    changeImageNext = (event) => {
        let payload = 0;

        if (this.props.reduxState.currentImage + 1 > this.props.reduxState.imagesReducer.length - 1) {
            payload = 0;
        } else {
            payload = this.props.reduxState.currentImage + 1;
        }

        this.props.dispatch({ type: 'SET_CURRENT_IMAGE', payload: payload });
    }

    changeImageBack = (event) => {
        let payload = 0;

        if (this.props.reduxState.currentImage - 1 < 0) {
            payload = this.props.reduxState.images.length - 1;
        } else {
            payload = this.props.reduxState.currentImage - 1;
        }

        this.props.dispatch({ type: 'SET_CURRENT_IMAGE', payload: payload });
    }


    render() {
        let renderElement = <div></div>;
        if (this.props.reduxState.imagesReducer.length > 0) {
            const currentImage = this.props.reduxState.images[this.props.reduxState.currentImage];
            renderElement = <img src={currentImage.path} alt={currentImage.title} />
        }

        return (
            <div>
                <button onClick={this.changeImageBack}>Back</button>
                {renderElement}
                <button onClick={this.changeImageNext}>Next</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Carousel);