import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

class BookContainer extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        {/* { this.props.books.loading &&
          <CircularProgress size={50} />
        } */}

        <BookForm onSave={this.save}/>
      </div>
    )
  }

  save(book) {
    console.log('ssss',book);
  }

  componentDidMount = () => {
    // this.props.listBooksAction();
  }
};

const mapDispatchToProps = dispatch => ({
  // listBooksAction: () => dispatch(listBooksAction())
})

const mapStateToProps = state => ({
  book : state.book
})

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);