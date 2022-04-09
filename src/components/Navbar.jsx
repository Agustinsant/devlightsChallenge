import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
        <div className="nav_container">
            <div className="logo"> <img src='https://codigoesports.com/wp-content/uploads/2017/12/KPI-Gaming-Logo.png' alt='logo'></img></div>
            <div className="menu_container">
                <p className='menu_btn'>Home</p>
                <p className='menu_btn' >Browse</p>
                <button className='cart_btn'><FaShoppingCart /></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar