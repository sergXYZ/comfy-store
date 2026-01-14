import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, NavBar } from '../components'

const HomeLayout = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
