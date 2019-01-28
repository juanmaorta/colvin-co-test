import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { find } from 'lodash/collection'
import { withStyles } from '@material-ui/core/styles'

import { getWhiteCardsByParent, generateRandomEmptyCard } from '../util/cards'
import styles from '../styles'
import CardDetail from './components/CardDetail'
import {
  addCard,
  deleteCard,
  editCard
} from './actions'

export const searchCard = (cardList, id) => {
  const card = find(cardList, { id: id })
  if (!card) return

  card.whiteCards = getWhiteCardsByParent(cardList, id)

  return card
}

// maybe set card instead of cards?
const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
  addCard: (parentId) => {
    return dispatch(addCard(generateRandomEmptyCard(parentId)))
  },
  deleteCard: (parentCard, whiteCard) => {
    return dispatch(deleteCard(parentCard, whiteCard))
  },
  editCard: () => {
    return dispatch(editCard())
  }
})

export class CardDetailContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      card: searchCard(this.props.cards, this.props.match.params.cardId)
    }
  }

  static getDerivedStateFromProps (props, state) {
    const cardId = props.match.params.cardId
    const card = searchCard(props.cards, cardId)

    if (card && card.whiteCards.length !== state.card.whiteCards.length) {
      return {
        card
      }
    }
    return null
  }

  render () {
    const {
      classes,
      addCard,
      editCard,
      deleteCard
    } = this.props
    const { card } = this.state

    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <CardDetail
            card={card}
            addCard={() => addCard(card.id)}
            editCard={editCard}
            deleteCard={deleteCard}
          />
        </div>
      </div>
    )
  }
}

CardDetailContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer)
)
