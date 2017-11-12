import * as React from 'react'

interface Props { compiler: string; framework: string }

export function Hello(props: Props) {
  return <h1>Hello from {props.compiler} and {props.framework}!</h1>
}
