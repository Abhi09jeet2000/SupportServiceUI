import { Box } from '@mui/material'
import React from 'react'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import MainComponent from '../../components/MainComponent/MainComponent'
import Navbar from '../../components/NavBar/Navbar'

export default function MainPage() {
  return (
    <Box>
      <Navbar />

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SideNavBar />
        <MainComponent />
      </Box>
    </Box>
  )
}
