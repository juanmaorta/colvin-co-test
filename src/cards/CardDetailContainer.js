import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { find } from 'lodash/collection'
import { withStyles } from '@material-ui/core/styles'

import { getWhiteCardsByParent, generateRandomEmptyCard } from '../util/cards'
import styles from '../styles'
import CardDetail from './components/CardDetail'
import ConfirmDialog from './components/ConfirmDialog'
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
  editCard: (card) => {
    return dispatch(editCard(card))
  }
})

export class CardDetailContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      card: searchCard(this.props.cards, this.props.match.params.cardId),
      isDialogOpen: false,
      cardToDelete: null
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

  handleDeleteCard = (cardId) => {
    this.setState({
      isDialogOpen: true,
      cardToDelete: cardId
    })
  }

  closeDialog = () => {
    this.setState({
      isDialogOpen: false,
      cardToDelete: null
    })
  }

  doDeleteCard = (cardId) => {
    this.props.deleteCard(cardId)
    this.setState({
      isDialogOpen: false,
      cardToDelete: null
    })
  }

  render () {
    const {
      classes,
      addCard,
      editCard
    } = this.props

    const { card, isDialogOpen, cardToDelete } = this.state

    return (
      <div className={classes.heroUnit}>
        <CardDetail
          card={card}
          addCard={() => addCard(card.id)}
          editCard={editCard}
          deleteCard={this.handleDeleteCard}
        />
        <ConfirmDialog
          open={isDialogOpen}
          title='Please confirm you want to delete the card'
          handleClose={this.closeDialog}
          handleAccept={this.doDeleteCard}
          cardId={cardToDelete}
        />
      </div>
    )
  }
}

CardDetailContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  addCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer)
)
