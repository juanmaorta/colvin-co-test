import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import styles from '../../styles'

import BlackCard from './BlackCard'
import WhiteCard from './WhiteCard'

class CardDetail extends Component {
  render () {
    const {
      card,
      classes,
      addCard,
      deleteCard,
      editCard
    } = this.props

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <BlackCard
          card={card}
          editable={false}
        />
        <Grid container spacing={40}>
          {card.whiteCards.map((wc, idx) => {
            return (
              <WhiteCard
                card={wc}
                handleDelete={deleteCard}
                handleEdit={editCard}
                key={idx}
              />
            )
          })}
        </Grid>
        <div className={classes.buttons}>
          <Button variant='contained' onClick={addCard}>Add a white card</Button>
        </div>
      </div>
    )
  }
}

CardDetail.propTypes = {
  card: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardDetail)
