import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.light
}
const themes = {
  light: 'light',
  dark: 'dark',
}

const NavBar = () => {
  const [darkTheme, setDarkTheme] = useState(getThemeFromLocalStorage())
  const handleTheme = () => {
    const { light, dark } = themes
    const newTheme = darkTheme === light ? dark : light
    setDarkTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme)
    localStorage.setItem('theme', darkTheme)
  }, [darkTheme])

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start h-12">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center content-center h-12"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks></NavLinks>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="navbar-end">
          <label htmlFor="themeSwap" className="swap swap-rotate">
            <input
              id="themeSwap"
              type="checkbox"
              onChange={handleTheme}
            ></input>
            <BsSunFill className="swap-on" />
            <BsMoonFill className="swap-off" />
          </label>

          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
