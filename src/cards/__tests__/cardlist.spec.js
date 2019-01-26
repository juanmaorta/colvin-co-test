/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import CardList from '../components/CardList'
import * as stubs from './stubs'

describe('CardList snapshots', () => {
  it('should match for CardList component', () => {
    const wrapper = shallow(
      <CardList
        classes={stubs.classes}
        cards={stubs.cards}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
