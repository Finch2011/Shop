import { useState , useRef , useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Up() {
    const Input = useRef()
    const InputPassword = useRef()
    const Input2 = useRef()    
   function sendInformation(){
    let Information = {
      "id" : Math.floor(Math.random() * 1000000000000) ,
      "firestName" : Input.current.value,
      "lasttName" : Input2.current.value,
      "password" : InputPassword.current.value,
    }
    localStorage.setItem("id", Information.id);
    localStorage.setItem("Email", Information.firestName);
    localStorage.setItem("Name", Information.lasttName);
    localStorage.setItem("password" , Information.password)
}
  
    return(
      <div className='main-Login'>
      <div className='container-Login'>
        <label htmlFor="">Email :</label>
        <input ref={Input} type="text"/>
        <label htmlFor="">Name :</label>
        <input ref={Input2} type="text"/>     
        <label htmlFor="">Password :</label>
        <input ref={InputPassword} type="password"/>     
        <Link to={"/Login"}><button onClick={sendInformation}>send</button></Link>
      </div>
      </div>
    )
    
}

export default Up
