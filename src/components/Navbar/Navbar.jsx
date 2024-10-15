import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';




const Navbar = ({setShowLogin}) => {

const [menu, setMenu] = useState('home')
const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>


<Link to='/'><img src={assets.logo} alt="" width='80' height='50' className='logo' /></Link>
      
          
         

        <ul className='navbar-menu' >
            <Link to='/' onClick = {() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
            <a href='#menu' onClick = {() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
            
            <a href='#app-download' onClick = {() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>about</a>
            <a href='#footer' onClick = {() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>contact</a>
        </ul>

        <div className='navbar-right'>
<img src={assets.search} alt="" width='40' height='40' className='search' />
<div className="navbar-search-icon">
    <Link to='./cart'><img src={assets.basket} alt="" width='20' height='20' className='basket' /></Link>
    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
</div>
<button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
        
    </div>
  )
}

export default Navbar