import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = () => ({
    textField: {
        width: '100%',
        marginBottom: 20,
    },
    form: {
        margin: 10,
    },
    button: {
        width: '100%',
    },
    bookTitle: {
        textAlign: 'center',
    },
});
class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            title: '',
            description: '',
            author: '',
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.form} onSubmit={this.submit}>
                <TextField
                    required
                    name="title"
                    label="Title"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />
                <TextField
                    required
                    name="author"
                    label="Author"
                    className={classes.textField}
                    value={this.state.author}
                    onChange={this.handleInputChange}
                />
                <TextField
                    required
                    name="description"
                    label="Description"
                    multiline
                    rows="10"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                />
                <Button type="submit" variant="outlined" color="primary" size="large" className={classes.button}>
                    Save
                </Button>
            </form>
        );
    }

    submit(event) {
        event.preventDefault();
        this.props.onSave(this.state);
    }

    componentDidMount() {
        if (this.props.book) {
            this.setState(this.props.book);
        }
    }
}
BookForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    book: PropTypes.object,
};
export default withStyles(styles)(BookForm);
