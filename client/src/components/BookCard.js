import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = () => ({
    card: {
        maxWidth: '100%'
    },
    media: {
        height: 0
    },
    actions: {
        display: 'flex'
    }
})
class BookCard extends React.Component {
    render() {
        const { classes } = this.props
        //console.log(this.props.releaseDate.toLocaleDateString())
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.title}
                        subheader={`Release date: ${this.props.releaseDate}`}
                    />
                    <CardContent>
                        <Typography component="p">
                        {this.props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
BookCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    releaseDate:  PropTypes.string,
}
export default withStyles(styles)(BookCard)