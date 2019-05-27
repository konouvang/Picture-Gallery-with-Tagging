import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Carousel from '../Carousel/Carousel';
import TagList from '../TagList/TagList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Carousel />
        <TagList />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);