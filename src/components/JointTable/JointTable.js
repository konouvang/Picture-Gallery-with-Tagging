import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'

class JointTable extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGE_TAGS'
        })
    }

    render() {
        console.log(this.props.reduxState.imagesTagsReducer)
        const imageTags = this.props.reduxState.imagesTagsReducer.map((data, index) => {
            return (
                <div key={index}>
                    <p>{data.name}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>Tags</h1>
                {imageTags}
            </div>
        )
    }

}
export default connect(mapReduxStateToProps)(JointTable);
