/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import { CardDetailContainer, searchCard } from '../CardDetailContainer'
import * as stubs from './stubs'

describe('CardDetailContainer test suite', () => {
  describe('CardDetailContainer snapshots', () => {
    it('should match for CardDetailContainer component', () => {
      const match = {
        params: {
          cardId: 1
        }
      }

      const wrapper = shallow(
        <CardDetailContainer
          classes={stubs.classes}
          deleteCard={jest.fn}
          match={match}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('searchCard', () => {
    it('should return undefined if card is not found', () => {
      expect(searchCard(stubs.cards, 12)).toBeUndefined()
    })
  })
})
