import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { saveBookAction } from '../actions/bookActions'
import { Redirect } from "react-router-dom";

class BookContainer extends Component {
  constructor(props){
    super(props)
    this.save = this.save.bind(this);
  }

  render() {
    if (this.props.saved){
      return  <Redirect to='/'/>
    }

    return (
      <div>

        { this.props.isLoading &&
          <CircularProgress size={50} />
        }

        <BookForm onSave={this.save}/>
      </div>
    )
  }

  save(book) {
    this.props.saveBookAction(book);
  }

  componentDidMount = () => {
    // this.props.listBooksAction();
  }
};

const mapDispatchToProps = dispatch => ({
    saveBookAction: (book) => dispatch(saveBookAction(book))
})

const mapStateToProps = state => ({
  isLoading: state.book.isLoading,
  saved: state.book.saved
})

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);