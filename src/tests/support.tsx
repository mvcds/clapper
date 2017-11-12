import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as Chai from 'chai'
import * as ChaiEnzyme from 'chai-enzyme'

Enzyme.configure({ adapter: new Adapter() })
Chai.use(ChaiEnzyme())
