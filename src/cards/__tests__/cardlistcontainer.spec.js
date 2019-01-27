/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import { CardListContainer } from '../CardListContainer'
import * as stubs from './stubs'

describe('CardListContainer snapshots', () => {
  it('should match for CardListContainer component', () => {
    const wrapper = shallow(
      <CardListContainer
        classes={stubs.classes}
        cards={stubs.cards}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
