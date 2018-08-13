import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { simpleAction } from '../actions/simpleAction'

class HomeContainer extends Component {
    render() {
      return (
        <div>
          <h2>Home</h2>
          <BookCard></BookCard>
          <button onClick={this.simpleAction}>tesge asdasd</button>
          <pre>
          {
            JSON.stringify(this.props.s)
          }
          </pre>
        </div>
      )
    }

    simpleAction = (event) => {
      this.props.simpleAction();
    }
  };

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  s : state.simpleReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);