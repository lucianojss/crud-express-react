import React                   from 'react'
import PropTypes               from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'
import Toolbar                 from '@material-ui/core/Toolbar'
import Typography              from '@material-ui/core/Typography'

/* component styles */

const AppBar = (props) => {
    const { children } = props
    return (
        <div>
            <MuiAppBar
                position="static"
                className="app-bar"
                color="secondary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {children}
                    </Typography>
                </Toolbar>
            </MuiAppBar>
        </div>
    )
}

AppBar.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppBar