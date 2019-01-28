import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import styles from '../../styles'

const WhiteCard = (props) => {
  const {
    card,
    classes,
    handleDelete
  } = props

  return (
    <Grid item sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>{card.text}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
          Edit
          </Button>
          <Button size='small' color='secondary' onClick={() => handleDelete(card.id)}>
          Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

WhiteCard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default withStyles(styles)(WhiteCard)
