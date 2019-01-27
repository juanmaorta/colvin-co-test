import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { find } from 'lodash/collection'
import { withStyles } from '@material-ui/core/styles'

import CardDetail from './components/CardDetail'
import styles from '../styles'

export const searchCard = (cardList, id) => {
  return find(cardList, { id: id })
}

const mapStateToProps = (state) => ({
  cards: state.cards
})

export class CardDetailContainer extends Component {
  constructor (props) {
    super(props)
    const cardId = props.match.params.cardId
    const card = searchCard(props.cards, cardId)

    this.state = {
      card
    }
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

export default withStyles(styles)(
  connect(mapStateToProps, null)(CardDetailContainer)
)
