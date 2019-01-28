/* global expect, describe, it */

import * as stubs from '../../mocks/cards'
import { getBlackCards, getWhiteCardsByParent } from '../cards'

describe('card utils test suite', () => {
  describe('getBlackCards', () => {
    it('should get the parent cards', () => {
      const expectedCards = [
        stubs.GoldFingerCard,
        stubs.SantasCard,
        stubs.KnockKnockCard
      ]

      expect(getBlackCards(stubs.cards))
        .toEqual(expectedCards)
    })
  })

  describe('getWhiteCardsByParent', () => {
    it('should get the children cards', () => {
      const expectedCards = [
        stubs.FleshEatingBacteriaCard,
        stubs.VictoriaMaidCard
      ]

      expect(getWhiteCardsByParent(stubs.cards, stubs.GolfingerId))
        .toEqual(expectedCards)
    })
  })
})
