/* global expect, describe, it, xit */
import React from 'react'
import { shallow } from 'enzyme'

import CardDetail from '../components/CardDetail'
import * as stubs from './stubs'

describe('CardDetail snapshots', () => {
  it('should match for CardDetail component', () => {
    const wrapper = shallow(
      <CardDetail
        classes={stubs.classes}
        card={stubs.card}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
