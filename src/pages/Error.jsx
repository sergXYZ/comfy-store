import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <main className="grid min-w-screen min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="text-3xl font-bold mt-4 sm:text-5xl">
            Page not found...
          </h1>
          <div className="mt-10">
            <Link to={'/'} className="btn btn-secondary uppercase">
              go back home
            </Link>
          </div>
        </div>
      </main>
    )
  }
  return <main>There was an error...</main>
}

export default Error
