import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { saveBookAction, newBookAction, getBookById, updateBookAction } from '../actions/bookActions';
import { Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';

class BookContainer extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    render() {
        if (this.props.saved) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                {this.props.isLoading && <LinearProgress color="secondary" />}

                {(this.props.book.title || !this.props.match.params.id) && (
                    <BookForm book={this.props.book} onSave={this.save} />
                )}

                {this.props.error && (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={!!this.props.error}
                        autoHideDuration={2000}
                        message={<span id="message-id">{this.props.error}</span>}
                    />
                )}
            </div>
        );
    }

    save(book) {
        if (!this.props.match.params.id) {
            this.props.saveBookAction(book);
        } else {
            this.props.updateBookAction(book);
        }
    }

    componentDidMount = () => {
        if (this.props.match.params.id) {
            this.props.getBookById(this.props.match.params.id);
        }
    };

    componentWillUnmount = () => {
        this.props.newBookAction();
    };
}

const mapDispatchToProps = dispatch => ({
    saveBookAction: book => dispatch(saveBookAction(book)),
    updateBookAction: book => dispatch(updateBookAction(book)),
    newBookAction: () => dispatch(newBookAction()),
    getBookById: id => dispatch(getBookById(id)),
});

const mapStateToProps = state => ({
    isLoading: state.book.isLoading,
    saved: state.book.saved,
    error: state.book.error,
    book: state.book.book,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookContainer);
