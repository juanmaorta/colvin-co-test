import * as mocks from '../mocks/cards'
import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD
} from './actions'

const defaultState = mocks.cards

const deleteCard = (cards, cardId) => {
  return cards.filter((card) => {
    return card.id !== cardId
  })
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.card
      ]
    case DELETE_CARD:
      return deleteCard(state, action.cardId)
    case EDIT_CARD:
      return [
        ...state,
        action.card
      ]
    default:
      return state
  }
}
