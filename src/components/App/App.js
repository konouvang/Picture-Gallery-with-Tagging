import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Carousel from '../Carousel/Carousel';
import TagList from '../TagList/TagList';
import JointTable from '../JointTable/JointTable';



class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Carousel />
        <TagList />
        <JointTable />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);