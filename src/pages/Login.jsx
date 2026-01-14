import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card bg-base-100 w-96 shadow-lg flex flex-col gap-y-4 p-8"
      >
        <h4 className="text-center text-3xl font-bold text-neutral/70">
          Login
        </h4>
        <FormInput label="email" name="identifier" type="email"></FormInput>
        <FormInput label="password" name="password" type="password"></FormInput>
        <div className="mt-4">
          <SubmitBtn text="login"></SubmitBtn>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-secondary btn-block uppercase"
          >
            guest user
          </button>
          <p className="text-center mt-4">
            {'Not a member yet? '}
            <Link
              to="/register"
              className="link link-primary ml-2 link-hover capitalize"
            >
              register{' '}
            </Link>
          </p>
        </div>
      </Form>
    </section>
  )
}

export default Login
