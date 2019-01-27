import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import HomeIcon from './util/HomeIcon'
import NotFound from './util/NotFound'
import CardListContainer from './cards/CardListContainer'
import CardDetailContainer from './cards/CardDetailContainer'

import styles from './styles'

class MainContainer extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.button} aria-label='Home' href='/'>
              <HomeIcon />
            </IconButton>
            <Typography variant='h6' color='inherit'>Custom Card Generator</Typography>
          </Toolbar>
        </AppBar>

        <Router>
          <Switch>
            <Route exact path='/' component={CardListContainer} />
            <Route exact path='/cards/:cardId' component={CardDetailContainer} />
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
