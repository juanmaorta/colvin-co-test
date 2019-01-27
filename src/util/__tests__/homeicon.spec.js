/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import HomeIcon from '../HomeIcon'

describe('HomeIcon snapshots', () => {
  it('should match for HomeIcon component', () => {
    const wrapper = shallow(
      <HomeIcon />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
