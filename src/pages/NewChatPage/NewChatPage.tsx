import { Box } from '@mui/material'
import React from 'react'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import Chat from '../../components/Chat/Chat'
import Navbar from '../../components/NavBar/Navbar'

export default function NewChatPage() {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideNavBar />
        <Chat visible={false} />
      </Box>
    </div>
  )
}
