import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import CardList from './components/CardList'

import styles from '../styles'

const cards = [
  {
    id: 1,
    text: 'Goldfinger: He\'s the man, the man with...'
  },
  {
    id: 2,
    text: 'Instead of coal, Santa now gives the bad children...'
  },
  {
    id: 3,
    text: 'Knock knock. Who\'s there?'
  }
]

class CardListContainer extends Component {
  addBlackCard = () => {
    console.log('add a black card')
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.heroUnit}>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
          Choose your black card
        </Typography>
        <CardList cards={cards} />
        <div className={classes.buttons}>
          <Button variant='contained' onClick={this.addBlackCard}>Add a black card</Button>
        </div>
      </div>
    )
  }
}

CardListContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardListContainer)
