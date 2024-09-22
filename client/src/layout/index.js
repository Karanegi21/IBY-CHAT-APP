import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-0 h-20 shadow-md bg-grey'>
            {/* <img className='blur-1  '
              src={logo}
              alt='logo'
              width={80}
              height={20}
            /> */}
            <div className='text-3xl text-bold color- grey font-bold'>IBY CHAT</div>

        </header>

        { children }
    </>
  )
}

export default AuthLayouts