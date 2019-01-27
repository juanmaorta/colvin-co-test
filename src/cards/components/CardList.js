import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import BlackCard from './BlackCard'

class CardList extends Component {
  editCard = (cardId) => {
    console.log(`editing card ${cardId}`)
  }

  deleteCard = (cardId) => {
    console.log(`deleting card ${cardId}`)
  }

  render () {
    const {
      cards
    } = this.props

    return (
      <Grid container spacing={40}>
        {cards.map((card, idx) => {
          return (
            <BlackCard
              card={card}
              key={idx}
              editable
              handleDelete={this.deleteCard}
              handleEdit={this.editCard}
            />
          )
        })}
      </Grid>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardList
