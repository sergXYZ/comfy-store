import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
]
const NavLinks = () => {
  const user = useSelector((state) => state.userState.user)
  return (
    <>
      {links.map((item) => {
        if ((item.text === 'checkout' || item.text === 'orders') && !user) {
          return null
        }
        return (
          <li key={item.id}>
            <NavLink className={'capitalize'} to={item.url}>
              {item.text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}

export default NavLinks
