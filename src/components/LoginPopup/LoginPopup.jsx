import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

const[currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-popup'>

      <form className="login-popup-container">
        <div className="login-popup-title">
          <h1>{currentState}</h1>
          <img onClick={() => {setShowLogin(false)}} src={assets.cross} alt="" />
        </div>

<div className="login-popup-inputs">
  {currentState === 'Login'? <></> : <input type="text" placeholder='Your name' required />}
  <input type="email" placeholder='bayo@gmail.com' required />
  <input type="password" placeholder='password' required />
</div>
<button>{currentState === 'Sign up' ? 'create account' : 'Login'}</button>

<div className="login-popup-condition">
  <input type="checkbox" required />
  <p>By continuing, i agree to terms and conditions</p>

  </div>

{currentState === "Login"?
  <p>Create a new account? <span onClick={() => setCurrentState('Sign up')}>Click here</span></p>
:
 <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
}
  
  


      </form>

    </div>
  )
}

export default LoginPopup