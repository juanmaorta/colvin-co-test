import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { generateRandomEmptyCard, getBlackCards } from '../util/cards'
import CardList from './components/CardList'
import {
  addCard,
  deleteCard,
  editCard
} from './actions'
import styles from '../styles'

const mapStateToProps = (state) => ({
  cards: getBlackCards(state.cards)
})

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (cardId) => {
    return dispatch(deleteCard(cardId))
  },
  editCard: (card) => {
    return dispatch(editCard(card))
  },
  addCard: (card) => {
    return dispatch(addCard(generateRandomEmptyCard()))
  }
})

export class CardListContainer extends Component {
  render () {
    const {
      addCard,
      cards,
      classes,
      deleteCard,
      editCard
    } = this.props

    return (
      <div className={classes.heroUnit}>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
          Choose your black card
        </Typography>
        <CardList
          cards={cards}
          deleteCard={deleteCard}
          editCard={editCard}
        />
        <div className={classes.buttons}>
          <Button variant='contained' onClick={addCard}>Add a black card</Button>
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
