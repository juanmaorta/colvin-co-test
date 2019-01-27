import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import CardList from './components/CardList'
import { deleteCard } from './actions'
import styles from '../styles'

const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (cardId) => {
    return dispatch(deleteCard(cardId))
  }
})

export class CardListContainer extends Component {
  addBlackCard = () => {
    console.log('add a black card')
  }

  render () {
    const {
      cards,
      classes,
      deleteCard
    } = this.props

    return (
      <div className={classes.heroUnit}>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
          Choose your black card
        </Typography>
        <CardList
          cards={cards}
          deleteCard={deleteCard}
        />
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

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CardListContainer)
)
