import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
        <Grid container spacing={40}>
          <BlackCard
            card={card}
            editable={false}
          />
        </Grid>
        <Grid container spacing={40}>
          {card.whiteCards.length === 0 &&
            <Typography gutterBottom variant='h5' component='h2'>no white cards yet</Typography>
          }
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
  addCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired
}

export default withStyles(styles)(CardDetail)
