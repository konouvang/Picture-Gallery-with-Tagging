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
        const tagList=document.getElementById("tagList");
        document.getElementById("newTag").value=tagList.options(tagList.selectIndex).text;
    }

    render() {
        const tagElement = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return ( 
            <option>
                <div >
                    {tagData.name}
                </div>
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
                        <p>Tags displayed is: <input type="text" id="newTag"></input></p>
                    </form>
                </body>
            </div>
        )
    }

}

export default connect(mapStateToProps)(TagList);