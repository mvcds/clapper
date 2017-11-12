import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { lorem } from 'faker'

import { Hello } from './index'

describe('Hello function', () => {
  it('should return hello world', () => {
    const compiler = lorem.word()
    const framework = lorem.word()

    const result = shallow(<Hello compiler={compiler} framework={framework} />)

    expect(result).to.have.text(`Hello from ${compiler} and ${framework}!`)
  })
})
