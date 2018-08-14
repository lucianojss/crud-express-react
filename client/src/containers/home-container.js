import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { listBooksAction, deleteBookAction } from '../actions/listBooksAction'
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';

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
            <LinearProgress color='secondary' />
          }
          <TextField
              name="search"
              label="Search your Book here"
              onChange={this.handleInputChange}
          />
          { books }
          {this.props.error}

          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={!!this.props.snackBarMessage}
          autoHideDuration={3000}
          message={<span id="message-id">{this.props.snackBarMessage}</span>}
        />

        </div>
      )
    }

    async deleteBook(id) {
      await this.props.deleteBookAction(id);
      if (!this.props.snackBarMessage) {
        await this.props.listBooksAction();
      }
    }

    componentDidMount = () => {
      this.props.listBooksAction();
    }
  };

const mapDispatchToProps = dispatch => ({
  listBooksAction: (query) => dispatch(listBooksAction(query)),
  deleteBookAction: (id) => dispatch(deleteBookAction(id)),
})

const mapStateToProps = state => ({
  books : state.books.books,
  loading: state.books.loading,
  error: state.books.error,
  snackBarMessage: state.books.snackBarMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);