/* global expect, describe, it */
import React from 'react'
import { shallow } from 'enzyme'

import CardList from '../components/CardList'
import * as stubs from './stubs'

describe('CardList snapshots', () => {
  it('should match for CardList component', () => {
    const wrapper = shallow(
      <CardList
        cards={stubs.cards}
        deleteCard={jest.fn}
        editCard={jest.fn}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
