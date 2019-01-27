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

const BlackCard = (props) => {
  const {
    card,
    classes,
    editable,
    handleDelete,
    handleEdit
  } = props

  return (
    <Grid item sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardContent className={classes.blackCardContent}>
          <Typography gutterBottom variant='h5' component='h2' className={classes.blackCardTitle}>{card.text}</Typography>
        </CardContent>
        {editable &&
          <CardActions className={classes.blackBackGround}>
            <Button size='small' color='primary' href={`cards/${card.id}`}>
            View
            </Button>
            <Button size='small' color='primary' onClick={() => handleEdit(card.id)}>
            Edit
            </Button>

            <Button size='small' color='secondary' onClick={() => handleDelete(card.id)}>
            Delete
            </Button>
          </CardActions>
        }
      </Card>
    </Grid>
  )
}

BlackCard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  editable: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
}

BlackCard.defaultProps = {
  editable: false
}

export default withStyles(styles)(BlackCard)
