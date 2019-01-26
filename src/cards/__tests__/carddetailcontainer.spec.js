/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import CardDetailContainer from '../CardDetailContainer'
import * as stubs from './stubs'

describe('CardDetailContainer snapshots', () => {
  it('should match for CardDetailContainer component', () => {
    const wrapper = shallow(
      <CardDetailContainer classes={stubs.classes} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
