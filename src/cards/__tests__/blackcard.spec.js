/* global expect, describe, it, jest */
import React from 'react'
import { shallow } from 'enzyme'

import BlackCard from '../components/BlackCard'
import * as stubs from './stubs'

describe('BlackCard snapshots', () => {
  it('should match for BlackCard component', () => {
    const wrapper = shallow(
      <BlackCard
        classes={stubs.classes}
        editable
        handleDelete={jest.fn}
        handleEdit={jest.fn}
        card={stubs.card}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
