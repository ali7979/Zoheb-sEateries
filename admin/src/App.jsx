import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import {Route,Routes} from 'react-router-dom'


const App = () => {
  const url = "https://zoheb-s-eateries-xob8.vercel.app";
  // const url="http://localhost:4000";

  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
      <Sidebar/>

        <Routes>
        <Route path='/' element={<List url={url}/>} />

          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url} />} />

          <Route path='/orders' element={<Order url={url}/>} />

        </Routes>
      </div>
    </div>
  )
}

export default App
