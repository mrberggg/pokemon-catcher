import React from 'react'
import Home from './Home'
import { shallow } from 'enzyme'

describe('Catch', () => {
  it('should ', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('h1').text()).toEqual('Pokemon Catcher')
  })
})
