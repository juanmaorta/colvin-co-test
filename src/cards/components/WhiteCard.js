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

import styles from '../../styles'
import { ENTER_KEY, ESCAPE_KEY } from '../../util/constants'

class WhiteCard extends Component {
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

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  toggleEdit = () => {
    if (this.state.isEditing) {
      this.props.handleEdit(
        {
          id: this.props.card.id,
          text: this.state.text,
          whiteCards: this.props.card.whiteCards,
          parentId: this.props.card.parentId
        }
      )
    }
    this.setState({
      isEditing: !this.state.isEditing,
      undoText: this.state.text
    })
  }

  render () {
    const {
      card,
      classes,
      handleDelete
    } = this.props

    return (
      <Grid item sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardContent>
            {!this.state.isEditing &&
              <Typography gutterBottom variant='h5' component='h2'>{card.text}</Typography>
            }
            {this.state.isEditing &&
              <TextField
                id='text'
                label='text'
                className={classes.whiteTextField}
                value={this.state.text}
                onChange={this.handleChange}
                onBlur={this.toggleEdit}
                onKeyDown={this.onKeyDown}
                margin='normal'
              />
            }
          </CardContent>
          <CardActions>
            <Button size='small' color='primary' onClick={this.toggleEdit}>
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
}

WhiteCard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default withStyles(styles)(WhiteCard)
