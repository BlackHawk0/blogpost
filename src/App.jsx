import React from 'react'
import Header from './components/common/Header'
import Login from './components/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import Feeds from './Pages/Feeds'
import ProfilePage from './components/Auth/UserProfile'
import FollowingPosts from './Pages/Followers'
import UsersList from './Pages/UsersList'

function App() {

  return (
    <>
    < Header />
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/following" element={<FollowingPosts />} />
      </Routes>
    </>
  )
}

export default App
