/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import CardDetail from '../components/CardDetail'
import * as stubs from './stubs'

describe('CardDetail snapshots', () => {
  it('should match for CardDetail component', () => {
    const wrapper = shallow(
      <CardDetail
        addCard={jest.fn}
        card={stubs.card}
        classes={stubs.classes}
        deleteCard={jest.fn}
        editCard={jest.fn}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
