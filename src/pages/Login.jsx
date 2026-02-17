import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { customFetch } from '../utils'
import { loginUser } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      const response = await customFetch.post('/auth/local', data)
      toast.success('you have logged successfully!')

      store.dispatch(loginUser(response.data))
      return redirect('/')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials'

      toast.error(errorMessage)
      return null
    }
  }

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      toast.success('welcome guest user!')
      dispatch(loginUser(response.data))
      navigate('/')
    } catch (error) {
      toast.error('guest user error. please, try again later')
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card bg-base-100 w-96 shadow-lg flex flex-col gap-y-4 p-8"
      >
        <h4 className="text-center text-3xl font-bold text-neutral/70">
          Login
        </h4>
        <FormInput
          label="email or username"
          name="identifier"
          type="email"
        ></FormInput>
        <FormInput label="password" name="password" type="password"></FormInput>
        <div className="mt-4">
          <SubmitBtn text="login"></SubmitBtn>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-secondary btn-block uppercase"
            onClick={handleGuestUser}
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
