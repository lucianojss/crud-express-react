import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const styles = () => ({
    textField: {
        width: '100%'
    },
    form: {
        margin: 10
    }
})
class BookForm extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <form className={classes.form}>
                <TextField
                    required
                    id="required"
                    label="Title"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="multiline-static"
                    label="Multiline"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        )
    }
}
BookForm.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(BookForm)