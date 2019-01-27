import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import BlackCard from './BlackCard'

class CardList extends Component {
  render () {
    const {
      cards,
      deleteCard,
      editCard
    } = this.props

    return (
      <Grid container spacing={40}>
        {cards.map((card, idx) => {
          return (
            <BlackCard
              card={card}
              key={idx}
              editable
              handleDelete={deleteCard}
              handleEdit={editCard}
            />
          )
        })}
      </Grid>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  deleteCard: PropTypes.func,
  editCard: PropTypes.func
}

export default CardList
