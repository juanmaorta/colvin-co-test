/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '../NotFound'
import * as stubs from './stubs'

describe('NotFound snapshots', () => {
  it('should match for NotFound component', () => {
    const wrapper = shallow(
      <NotFound classes={stubs.classes} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
