import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const styles = () => ({
    card: {
        maxWidth: '100%',
        marginBottom: 20,
    },
    media: {
        height: 0,
    },
    actions: {
        display: 'flex',
    },
});

class BookCard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <div>
                            <IconButton component={Link} to={`/book/${this.props.id}`}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => this.props.onDelete(this.props.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    }
                    title={this.props.title}
                    subheader={this.props.author}
                />
                <CardContent>
                    <Typography>{this.props.description}</Typography>
                </CardContent>
            </Card>
        );
    }
}
BookCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
    onDelete: PropTypes.func,
};
export default withStyles(styles)(BookCard);
