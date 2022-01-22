import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react'

 const Layout = (props: { children?: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout;