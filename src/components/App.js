import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import actionCreator from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount() {
    // call our action
    this.props.getData();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getData: actionCreator }, dispatch);
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, mapDispatchToProps)(App);
