import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import { Box } from '@mui/material'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import Chat from '../../components/Chat/Chat'

export default function OldChatPage() {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <SideNavBar />
        <Chat visible={true} />
      </Box>
    </div>
  )
}
