import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

class ConfirmDialog extends Component {
  render () {
    const {
      cardId,
      handleAccept,
      handleClose,
      open,
      title
    } = this.props

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleAccept(cardId)} color='primary'>
              Accept
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
              Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

ConfirmDialog.propTypes = {
  cardId: PropTypes.string,
  handleAccept: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
}

ConfirmDialog.defaultProps = {
  open: false
}

export default ConfirmDialog
