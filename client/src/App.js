import './styles/App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Credits from './pages/Credits'
import Nav from './components/Nav'
import Feed from './pages/Feed'
import MyProfile from './pages/MyProfile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

const App = () => {
  
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="App">
      <header className='Nav'>
        <Nav 
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
        />
      </header>
       <main className="Routes"> 
         <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/feed' element={<Feed />}/>
          <Route path='/myprofile' element={<MyProfile />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/credits' element={<Credits />}/>
        </Routes>
       </main> 
       <footer>
         <Footer />
       </footer>
    </div>
  );
}

export default App;
