/* global expect, describe, it, xit */

import reducer, { deleteCard, updateCardList } from '../reducer'
import { ADD_CARD, DELETE_CARD, EDIT_CARD } from '../actions'
import * as stubs from './stubs'

describe('reducer test suite', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should delete a card', () => {
    const action = {
      type: DELETE_CARD,
      cardId: stubs.cardId
    }

    expect(reducer(stubs.cards, action)).toMatchSnapshot()
  })

  it('should add a card', () => {
    const action = {
      type: ADD_CARD,
      card: stubs.newCard
    }

    expect(reducer(stubs.cards, action)).toMatchSnapshot()
  })

  it('should edit a card', () => {
    const editedCard = {
      ...stubs.card,
      text: 'the new text'
    }

    const action = {
      type: EDIT_CARD,
      card: editedCard
    }

    expect(reducer(stubs.cards, action)).toMatchSnapshot()
  })

  describe('reducer functions', () => {
    it('should remove a card from the card list and all its children', () => {
      const expectedCardList = [
        stubs.card1,
        stubs.card2
      ]
      expect(deleteCard(stubs.cards, stubs.card.id)).toEqual(expectedCardList)
    })

    it('should update a card in the card list', () => {
      const updatedCard = {
        ...stubs.card,
        text: 'this is the new text'
      }
      const expectedCardList = [
        updatedCard,
        stubs.card1,
        stubs.card2,
        stubs.childCard
      ]

      expect(updateCardList(stubs.cards, updatedCard)).toEqual(expectedCardList)
    })
  })
})
