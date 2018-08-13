import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { listBooksAction } from '../actions/listBooksAction'
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeContainer extends Component {
    render() {
      const books = this.props.books.books.map((book) =>
        <BookCard
          title={book.title}
          description={book.description}
          releaseDate= {book.releaseDate}
          key={book._id} />
      );
      return (
        <div>
          <h2>Home</h2>

          { this.props.books.loading &&
            <CircularProgress size={50} />
          }

          { books }
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
  books : state.books
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);