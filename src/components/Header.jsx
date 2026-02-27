import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useQueryClient } from '@tanstack/react-query'

const Header = () => {
  const queryClient = useQueryClient()
  const user = useSelector((state) => state.userState.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    navigate('/')
    dispatch(logoutUser())
    dispatch(clearCart())
    queryClient.removeQueries()
  }
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="flex align-element justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2  items-center">
            <p className="text-xs sm:text-sm">Hello {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary "
              onClick={handleLogout}
            >
              {' '}
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="./login" className="link link-hover text-xs sm:text-sm">
              Sign in/Sign is as a guest
            </Link>
            <Link
              to="./register"
              className="link link-hover text-xs sm:text-sm"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
