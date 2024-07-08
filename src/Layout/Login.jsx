import { useState , useRef , useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const Input = useRef()
  const InputPassword = useRef()
  const Input2 = useRef()
  
 function setInformation(){
  let Information = {
    "id" : Math.floor(Math.random() * 1000000000000) ,
    "firestName" : Input.current.value,
    "password" : InputPassword.current.value,
  }
  }

  return(
    <div className='main-Login'>
    <div className='container-Login'>
      <label htmlFor="">Email :</label>
      <input ref={Input} type="text"/>
      <label htmlFor="">Last Name :</label>
      <input ref={InputPassword} type="password"/>     
      <button onClick={setInformation}>send</button>
    </div>
    </div>
)

  
}

export default Login
