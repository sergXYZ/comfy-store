import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
  const error = useRouteError()
  console.log(error)

  return <h4>There was an error...</h4>
}

export default ErrorComponent
