/* global expect, describe, it */
import React from 'react'
import { shallow } from 'enzyme'

import ConfirmDialog from '../components/ConfirmDialog'
import * as stubs from './stubs'

describe('ConfirmDialog snapshots', () => {
  it('should match for ConfirmDialog component', () => {
    const wrapper = shallow(
      <ConfirmDialog
        cardId={stubs.cardId}
        handleAccept={jest.fn}
        handleClose={jest.fn}
        open
        title='Some random title'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
