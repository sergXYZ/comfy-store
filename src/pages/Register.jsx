import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await customFetch.post('/auth/local/register', data)
    toast.success('account created successfully')

    return redirect('/login')
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials'

    toast.error(errorMessage)
    return null
  }
}
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card bg-base-100 w-96 shadow-lg flex flex-col gap-y-2 p-8"
      >
        <h4 className="text-center text-3xl font-bold text-neutral/70">
          Register
        </h4>
        <FormInput label="username" name="username" type="text"></FormInput>
        <FormInput label="email" name="email" type="email"></FormInput>
        <FormInput label="password" name="password" type="password"></FormInput>
        <div className="mt-4">
          <SubmitBtn text="register"></SubmitBtn>
        </div>
        <div>
          <p className="text-center mt-4">
            {'Already registered? '}
            <Link
              to="/login"
              className="link link-primary ml-2 link-hover capitalize"
            >
              login{' '}
            </Link>
          </p>
        </div>
      </Form>
    </section>
  )
}

export default Register
