import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Credits from './pages/Credits'
import Nav from './components/Nav'
import Feed from './pages/Feed'
import MyProfile from './pages/MyProfile'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import CreatePath from './pages/CreatePost'
import { CheckSession } from './services/Auth'
import Comment from './components/Comment'
import DeleteProjectBtn from './components/DeleteProjectBtn'
import UpdateProjectBtn from './components/UpdateProjectButton'

const App = () => {
  
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])


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
          <Route path='/createpost' element={<CreatePath user={user} authenticated={authenticated}/>}/>
          <Route path='/comments' element={<Comment user={user} authenticated={authenticated}/>}/>
          <Route path='/feed' element={<Feed user={user} authenticated={authenticated} />}/>
          <Route path='/myprofile' element={<MyProfile user={user} authenticated={authenticated}/>}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/signin' element={<SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />}/>
          <Route path='/credits' element={<Credits />}/>
          <Route path='/delete' element={<DeleteProjectBtn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />}/>
          <Route path='/update' element={<UpdateProjectBtn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />}/>
        </Routes>
       </main> 
  
    </div>
  );
}

export default App;
