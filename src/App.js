import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getPostByIdFunc, getPostsBulkFunc } from './actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="App">
          <button onClick={() => {
            this.props.getPostById(1);
          }}>By Id</button>
          <button onClick={() => {
            this.props.getPostBulk();
          }}>In bulk</button>

        </div>
        <div>

          {(this.props.state.byId.isLoading || this.props.state.byBulk.isLoading) && <p>Carregando...</p>}
          {this.props.state.byId &&
            <p>{this.props.state.byId.data && this.props.state.byId.data.title}</p>
          }
          {this.props.state.byBulk &&
            <p>{this.props.state.byBulk.data && 
              this.props.state.byBulk.data.map(item => (
                <p key={Math.random()}>{item.title}</p>
              ))
            }</p>
          }


        </div>
      </>


    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPostById: getPostByIdFunc(dispatch),
    getPostBulk: getPostsBulkFunc(dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
