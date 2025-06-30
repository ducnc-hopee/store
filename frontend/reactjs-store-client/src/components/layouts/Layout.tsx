import React from 'react'
import { Navbar } from './elements/Navbar'

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <p>Header</p>
      <Navbar />
      {children}
      <footer>footer</footer>
      <p>copyright</p>
    </div>
  )
}
