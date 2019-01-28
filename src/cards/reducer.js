import * as mocks from '../mocks/cards'
import { ADD_CARD, DELETE_CARD, EDIT_CARD } from './actions'

const defaultState = mocks.cards

export const deleteCard = (cards, cardId) => {
  return cards.filter((card) => {
    return card.id !== cardId && card.parentId !== cardId
  })
}

export const updateCardList = (cards, newCard) => {
  return cards.map((card) => {
    return (card.id !== newCard.id) ? card : newCard
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
      return updateCardList(state, action.card)
    default:
      return state
  }
}
