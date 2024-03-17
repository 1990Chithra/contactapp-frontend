import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Add from './Components/Add';
import { Routes,Route } from 'react-router-dom';
import View from './Components/View';
import Edit from './Components/Edit';

function App() {
  return (
    <div>
       <Header/>
       <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
      </Routes>
       <Footer/> 
    </div>
  )
}

export default App