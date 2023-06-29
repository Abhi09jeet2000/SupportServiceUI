import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ChatNavBar from '../ChatNavBar/ChatNavBar'
import ChatScreen from './ChatScreen'
import Drawer from '../ChatNavBar/Drawer'
import ChatScreen2 from './ChatScreen2'

const defaultTheme = createTheme({
  // palette: {
  //   background: {
  //     default: '#1F1C61',
  //   },
  // },
})

export default function Chat({ visible }: any) {
  const [isClick, setIsClick] = useState(false)

  const handleChange = () => {
    setIsClick((prev) => !prev)
    // console.log(isClick)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        disableGutters={useMediaQuery(
          defaultTheme.breakpoints.between('xs', 'xl'),
        )}
        maxWidth={false}
        sx={{
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'flex-center',
          // justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <ChatNavBar isClick={isClick} handleChange={handleChange} />
            {visible ? <ChatScreen /> : <ChatScreen2 />}
          </Box>
          <Drawer isClick={isClick} handleChange={handleChange} />
        </Box>
      </Container>
    </ThemeProvider>
  )
}
