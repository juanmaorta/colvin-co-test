import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { generateRandomEmptyCard, getBlackCards } from '../util/cards'
import CardList from './components/CardList'
import ConfirmDialog from './components/ConfirmDialog'
import styles from '../styles'
import { addCard, deleteCard, editCard } from './actions'

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
  constructor (props) {
    super(props)

    this.state = {
      isDialogOpen: false,
      cardToDelete: null
    }
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
      addCard,
      cards,
      classes,
      editCard
    } = this.props

    const { isDialogOpen, cardToDelete } = this.state

    return (
      <div className={classes.heroUnit}>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
          {cards.length > 0 &&
            <span>Choose your black card</span>
          }
          {cards.length === 0 &&
            <span>Press the button to add new cards</span>
          }
        </Typography>
        <CardList
          cards={cards}
          deleteCard={this.handleDeleteCard}
          editCard={editCard}
        />
        <div className={classes.buttons}>
          <Button variant='contained' onClick={addCard}>Add a black card</Button>
        </div>
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

CardListContainer.propTypes = {
  addCard: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  editCard: PropTypes.func.isRequired
}

CardListContainer.defaultProps = {
  cards: []
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CardListContainer)
)
