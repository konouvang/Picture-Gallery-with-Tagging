import React, { Component } from 'react';
import './App.css';
import { getImages } from '../../modules/services/serviceReducers';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageArray: [],
    }
  }


  componentDidMount() {
    this.dispatchImagesToRedux();
  }

// Dispatches images from GET call to redux
  dispatchImagesToRedux = () => {
    getImages().then((response) => {
      console.log(response)
      this.props.dispatch({
        type: 'SET_IMAGES',
        payload: response.data,
      })
    })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);