import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { listBooksAction, deleteBookAction } from '../actions/listBooksAction'
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeContainer extends Component {
  constructor(props){
    super(props);

    this.deleteBook = this.deleteBook.bind(this);
  }

    render() {
      const books = this.props.books.map((book) =>
        <BookCard
          title={book.title}
          description={book.description}
          author={book.author}
          id={book._id}
          onDelete={this.deleteBook}
          key={book._id} />
      );

      return (
        <div>
          { this.props.loading &&
            <CircularProgress size={50} />
          }
          { books }
          {this.props.error}
        </div>
      )
    }

    deleteBook(id) {
      this.props.deleteBookAction(id);
    }

    componentDidMount = () => {
      this.props.listBooksAction();
    }
  };

const mapDispatchToProps = dispatch => ({
  listBooksAction: () => dispatch(listBooksAction()),
  deleteBookAction: (id) => dispatch(deleteBookAction(id)),
})

const mapStateToProps = state => ({
  books : state.books.books,
  loading: state.books.loading,
  error: state.books.error
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);