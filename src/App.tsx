import React from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/SignIn/Signin'
import MainPage from './pages/MainPage/MainPage'
import ChatSessionsPage from './pages/ChatSessions/ChatSessionsPage'
import OldChatPage from './pages/OldChatPage/OldChatPage'
import NewChatPage from './pages/NewChatPage/NewChatPage'

function App() {
  return (
    <div className="App" style={{ background: '#F8F9FA', overflow: 'hidden' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Signin />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/chat/all" element={<ChatSessionsPage />} />
          <Route path="/chat/old/:id" element={<OldChatPage />} />
          <Route path="/chat/new" element={<NewChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
