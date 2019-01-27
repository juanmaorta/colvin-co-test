import { find } from 'lodash/collection'
import * as mocks from '../mocks/cards'
import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
  FETCH_CARD
} from './actions'

const defaultState = mocks.cards

export const deleteCard = (cards, cardId) => {
  return cards.filter((card) => {
    return card.id !== cardId
  })
}

export const updateCardList = (cards, newCard) => {
  return cards.map((card) => {
    return (card.id !== newCard.id) ? card : newCard
  })
}

export const fetchCard = (cards, cardId) => {
  return find(cards, { id: cardId })
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
    case FETCH_CARD:
      return fetchCard(state, action.cardId)
    default:
      return state
  }
}
