import React, { useState } from 'react'

function Loginform() {
   const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>
        {isLogin ? <>
          <div className='form'>
            <h2>Login Form</h2>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <button>Login</button>
            <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a></p>
          </div>
          </>
          :<>
          <div className='form'>
          <h2>SignUp Form</h2>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Signup</button>
          </div>
          </>}
      </div>
    </div>
  )
}
export default Loginform