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
    "Email" : Input.current.value,
    "password" : InputPassword.current.value,
  }
  


}

  return(
    <div className='main-Login'>
    <div className='container-Login'>
      <label htmlFor="">Email :</label>
      <input ref={Input} type="text"/>
      <label htmlFor="">Password :</label>
      <input ref={InputPassword} type="password"/>     
      <Link to={"/"}><button onClick={setInformation}>send</button></Link>
    </div>
    </div>
)

 }

export default Login
