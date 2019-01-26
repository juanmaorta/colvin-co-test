import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import NotFound from './util/NotFound'

import styles from './styles'

class MainContainer extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' color='inherit'>Custom Card Generator</Typography>
          </Toolbar>
        </AppBar>

        <Router>
          <Switch>
            <Route component={NotFound} />
          </Switch>
        </Router>

        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
            The footer can have more things to do
          </Typography>
        </footer>
      </div>
    )
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainContainer)
