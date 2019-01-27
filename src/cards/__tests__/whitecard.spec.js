/* global expect, describe, it, jest */
import React from 'react'
import { shallow } from 'enzyme'

import WhiteCard from '../components/WhiteCard'
import * as stubs from './stubs'

describe('WhiteCard snapshots', () => {
  it('should match for WhiteCard component', () => {
    const wrapper = shallow(
      <WhiteCard
        classes={stubs.classes}
        handleDelete={jest.fn}
        handleEdit={jest.fn}
        card={stubs.card}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
