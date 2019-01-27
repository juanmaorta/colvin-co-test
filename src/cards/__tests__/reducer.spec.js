/* global expect, describe, it */

import { deleteCard, updateCardList } from '../reducer'
import * as stubs from './stubs'

describe('reducer test suite', () => {
  it('should remove a card from the card list', () => {
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
      stubs.card2
    ]

    expect(updateCardList(stubs.cards, updatedCard)).toEqual(expectedCardList)
  })
})
