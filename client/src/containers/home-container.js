import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { listBooksAction } from '../actions/listBooksAction'
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeContainer extends Component {
    render() {
      const books = this.props.books.map((book) =>
        <BookCard
          title={book.title}
          description={book.description}
          author={book.author}
          key={book._id} />
      );
      return (
        <div>
          <h2>Home</h2>

          { this.props.loading &&
            <CircularProgress size={50} />
          }

          { books }

          {this.props.error}
        </div>
      )
    }

    componentDidMount = () => {
      this.props.listBooksAction();
    }
  };

const mapDispatchToProps = dispatch => ({
  listBooksAction: () => dispatch(listBooksAction())
})

const mapStateToProps = state => ({
  books : state.books.books,
  loading: state.books.loading,
  error: state.books.error
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);