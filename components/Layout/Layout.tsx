import React from 'react'
import Navbar from '@/components/Navbar/Navbar';

export const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}
