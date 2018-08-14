import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { listBooksAction, deleteBookAction } from '../actions/listBooksAction';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import debounce from '../utils/debounce';

const styles = () => ({
    errorField: {
        textAlign: 'center',
        margin: 20,
    },
    searchBar: {
        width: '100%',
        marginBottom: 20,
    },
    container: {
        margin: 20,
    },
});

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
        this.handleSearchInputChangeDebouced = debounce(this.handleSearchInputChangeDebouced, 1000);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    handleSearchInputChangeDebouced() {
        this.props.listBooksAction(this.state.query);
    }

    onSearchChange(event) {
        this.setState({ query: event.target.value });
        this.handleSearchInputChangeDebouced();
    }

    render() {
        const { classes } = this.props;
        const books = this.props.books.map(book => (
            <BookCard
                title={book.title}
                description={book.description}
                author={book.author}
                id={book._id}
                onDelete={this.deleteBook}
                key={book._id}
            />
        ));

        return (
            <div>
                {this.props.loading && <LinearProgress color="secondary" />}
                <div className={classes.container}>
                    <TextField
                        className={classes.searchBar}
                        name="search"
                        label="Search your Book here"
                        onChange={this.onSearchChange}
                    />

                    {books}
                    <div className={classes.errorField}>{this.props.error}</div>
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
            </div>
        );
    }

    deleteBook(id) {
        this.props.deleteBookAction(id);
    }

    componentDidMount = () => {
        this.props.listBooksAction('');
    };
}

const mapDispatchToProps = dispatch => ({
    listBooksAction: query => dispatch(listBooksAction(query)),
    deleteBookAction: id => dispatch(deleteBookAction(id)),
});

const mapStateToProps = state => ({
    books: state.books.books,
    loading: state.books.loading,
    error: state.books.error,
    snackBarMessage: state.books.snackBarMessage,
});

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomeContainer)
);
