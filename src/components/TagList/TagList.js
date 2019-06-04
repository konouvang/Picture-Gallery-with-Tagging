import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapReduxStateToProps';

class TagList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS'
        })
        this.props.dispatch({
            type: 'GET_IMAGE_TAGS'
        })
    }

    clickTag = (event) => {
        const imageId = this.props.reduxState.currentImage + 1;
        const payload = {
            imageId : imageId,
            tagId : event.target.dataset.id,
        }
        this.props.dispatch({
            type: 'ADD_IMAGE_TAG',
            payload: payload
        })
    }

    displayNewTag = (event) => {
        const dropdownValue = event.target.value;
        this.setState({
            selectedTag: dropdownValue,
        });
    }

    clickAddTag = (event) => {
        const imageId = this.props.reduxState.imageTags[this.props.reduxState.currentImage].id;
        const tagId = Number(this.state.selectedTag);
    
        this.props.dispatch({
            type: 'ADD_IMAGE_TAG',
            payload: {
                imageId,
                tagId, 
            }
        })
    }

    render() {
        const tagElement = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return ( 
            <option value={tagData.id} key={tagIndex}>
                    {tagData.name}
            </option>
            )
        })

        return (
            <div>
                <body>
                    <form>
                        Select your Tag:
                        <select id="tagList" onChange="displayNewTag()">
                            {tagElement}
                            {this.props.reduxState.imageTags.tag_id}
                        </select>
                        <div><button onClick={this.clickAddTag}>ADD TAG</button></div>
                    </form>
                </body>
            </div>
        )
    }

}

export default connect(mapStateToProps)(TagList);