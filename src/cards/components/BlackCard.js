/* eslint camelcase: ["off"] */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import { ENTER_KEY, ESCAPE_KEY } from '../../util/constants'
import styles from '../../styles'

class BlackCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: this.props.card.isEditing || this.props.isEditing,
      text: this.props.card.text,
      undoText: this.props.card.text
    }
  }

  onKeyDown = event => {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.toggleEdit()
        break
      case ESCAPE_KEY:
        this.cancelEdit()
        break
      default:
    }
  }

  cancelEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
      text: this.state.undoText
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  toggleEdit = () => {
    if (this.state.isEditing) {
      this.props.handleEdit(
        {
          id: this.props.card.id,
          text: this.state.text,
          whiteCards: this.props.card.whiteCards
        }
      )
    }
    this.setState({
      isEditing: !this.state.isEditing,
      undoText: this.state.text
    })
  }

  UNSAFE_componentWillReceiveProps (newProps) {
    if (newProps.card.text !== this.state.text) {
      this.setState({
        text: newProps.card.text
      })
    }
  }

  render () {
    const {
      card,
      classes,
      editable,
      handleDelete
    } = this.props

    return (
      <Grid item sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardContent className={classes.blackCardContent}>
            {!this.state.isEditing &&
              <Typography gutterBottom variant='h5' component='h2' className={classes.blackCardTitle}>{this.state.text}</Typography>
            }
            {this.state.isEditing &&
              <TextField
                id='text'
                label='text'
                className={classes.whiteTextField}
                value={this.state.text}
                onChange={this.handleChange('text')}
                onBlur={this.toggleEdit}
                onKeyDown={this.onKeyDown}
                margin='normal'
              />
            }
          </CardContent>
          {editable &&
            <CardActions className={classes.blackBackGround}>
              <Button size='small' color='primary' href={`cards/${card.id}`}>
              View
              </Button>
              <Button size='small' color='primary' onClick={this.toggleEdit}>
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
}

BlackCard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  editable: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
}

BlackCard.defaultProps = {
  editable: false,
  isEditing: false
}

export default withStyles(styles)(BlackCard)
