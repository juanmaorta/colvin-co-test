import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { find } from 'lodash/collection'
import { withStyles } from '@material-ui/core/styles'

import CardDetail from './components/CardDetail'
import { cards } from '../mocks/cards'
import styles from '../styles'

class CardDetailContainer extends Component {
  constructor (props) {
    super(props)
    const cardId = props.match.params.cardId
    const card = this.searchCard(cardId)

    this.state = {
      card
    }
  }

  searchCard = (id) => {
    return find(cards, { id: parseInt(id, 10) })
  }

  render () {
    const { classes } = this.props
    const { card } = this.state

    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <CardDetail
            card={card}
          />
        </div>
      </div>
    )
  }
}

CardDetailContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardDetailContainer)
