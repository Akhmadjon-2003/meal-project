import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout