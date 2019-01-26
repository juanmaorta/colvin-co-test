import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import styles from '../styles'

const CardDetailContainer = (props) => {
  const { classes } = props

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography variant='h6' align='center' color='textSecondary' paragraph>
          The dummy card detail container
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary' href='/'>Home</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

CardDetailContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardDetailContainer)
