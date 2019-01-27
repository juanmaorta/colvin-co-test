export const EDIT_CARD = 'EDIT_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const FETCH_CARD = 'FETCH_CARD'
export const ADD_CARD = 'ADD_CARD'

export const editCard = (card) => ({
  type: EDIT_CARD,
  card
})

export const deleteCard = (cardId) => ({
  type: DELETE_CARD,
  cardId
})

export const fetchCard = (cardId) => ({
  type: FETCH_CARD,
  cardId
})

export const addCard = (card) => ({
  type: ADD_CARD,
  card
})
