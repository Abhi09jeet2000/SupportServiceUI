import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import { Box } from '@mui/material'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import ChatSessions from '../../components/ChatSessions/ChatSessions'

export default function ChatSessionsPage() {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideNavBar />
        <ChatSessions />
      </Box>
    </div>
  )
}
