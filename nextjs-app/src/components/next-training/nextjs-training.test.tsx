import React from 'react'
import { shallow } from 'enzyme'
import { NextJsTraining } from './nextjs-training'

describe('Next JS training', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
        <NextJsTraining />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
