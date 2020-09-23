import React from 'react'
import { shallow } from 'enzyme'
import Catch from './Catch'

describe('Catch', () => {
  it('should ', () => {
    const wrapper = shallow(<Catch />)
    expect(wrapper.find('h1').text()).toEqual('Catch a Pokemon')
  })
})
