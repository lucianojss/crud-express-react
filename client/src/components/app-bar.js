import React                   from 'react'
import PropTypes               from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'
import Toolbar                 from '@material-ui/core/Toolbar'
import Typography              from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom";

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    }
};


const AppBar = (props) => {
    const { children, classes } = props

    return (
        <div>
            <MuiAppBar
                position="static"
                className="app-bar"
                color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {children}
                    </Typography>

                    <Button color="inherit" component={Link} to='/'>
                        List Books
                    </Button>
                    <Button color="inherit" component={Link} to='/book'>
                        Create Books
                    </Button>
                </Toolbar>
            </MuiAppBar>
        </div>
    )
}

AppBar.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(AppBar);