import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface Props { compiler: string; framework: string }

function Hello(props: Props) {
  return <h1>Hello from {props.compiler} and {props.framework}!</h1>
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('example')
)
