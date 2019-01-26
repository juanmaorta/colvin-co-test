import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import styles from '../../styles'

class CardList extends Component {
  editCard = (cardId) => {
    console.log(`editing card ${cardId}`)
  }

  deleteCard = (cardId) => {
    console.log(`deleting card ${cardId}`)
  }

  render () {
    const {
      cards,
      classes
    } = this.props

    return (
      <Grid container spacing={40}>
        {cards.map((card, idx) => {
          return (
            <Grid item key={idx} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardContent className={classes.blackCardContent}>
                  <Typography gutterBottom variant='h5' component='h2' className={classes.blackCardTitle}>{card.text}</Typography>
                </CardContent>
                <CardActions className={classes.blackBackGround}>
                  <Button size='small' color='primary' href={`cards/${card.id}`}>
                  View
                  </Button>
                  <Button size='small' color='primary' onClick={() => this.editCard(card.id)}>
                  Edit
                  </Button>

                  <Button size='small' color='secondary' onClick={() => this.deleteCard(card.id)}>
                  Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardList)
