import * as React from 'react'
import * as Knobs from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Hello } from './index'

storiesOf('Hello', module)
  .addDecorator(Knobs.withKnobs)
  .add('Default', () => {
    const compiler = Knobs.text('compiler', 'TypeScript')
    const framework = Knobs.text('framework', 'React')

    return(
      <Hello compiler={compiler} framework={framework} />
    )
  })
