import { useState , useRef , useEffect } from 'react'
import './App.css'
function App() {
  const [users, setUsers] = useState([]);
  const [sorted , setSorted] = useState(false)
  useEffect(()=>{
      fetch("https://api.escuelajs.co/api/v1/products?offset=3&limit=13")
      .then((res) => res.json())
      .then((output) => setUsers(output))
  },[]);
  const Desc = [...users].sort((a,b) => b.price - a.price)
  const Asc = [...users].sort((a,b) => a.price - b.price)
  return(
       <>
       <nav>
        <h1>Shop</h1>
        <ul>
          <li>Home</li>
          <li>Proudects</li>
          <li>Blog</li>
        </ul>
        <div>
        <button className='btn-nav'>Login</button>
        <button>Sigin Up</button>
        </div>
       </nav>
    <div>
      <div className='container-button'>
        <h1>Proudects</h1>
        <div>
      <button onClick={()=> setSorted(false)} >Ace</button>
      <button onClick={()=> setSorted(true)}>Desc</button>
      </div>
      </div>
      <div className='container'>
        {sorted ?
        Desc.map((usersData) => (
          <div className='main-div' key={usersData.id}>
              <img src={usersData.images[0]} alt="Images" />
              <div className='title-div'>
              <h3>{usersData.title.slice(0,15)}</h3>
              <span className='price'>{usersData.price}$</span>
              <p>{usersData.description.slice(0 , 125)}</p>
              </div>
            </div>
           ))
          :Asc.map((usersData) => (
            <div className='main-div' key={usersData.id}>
                <img src={usersData.images[0]} alt="Images" />
                <div className='title-div'>
                <h3>{usersData.title.slice(0,15)}</h3>
                <span className='price'>{usersData.price}$</span>
                <p>{usersData.description.slice(0 , 125)}</p>
                <button className='Buy'>Buy</button>
                </div>
              </div>
             ))}
      </div>
    </div>
    </>
)
  
}

export default App
