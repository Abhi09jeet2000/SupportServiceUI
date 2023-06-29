import { Box, Button, Container } from '@mui/material'
import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'

const defaultTheme = createTheme({
  // palette: {
  //   background: {
  //     default: '#1F1C61',
  //   },
  // },
})

export default function ChatSessionsNavbar() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        disableGutters={useMediaQuery(
          defaultTheme.breakpoints.between('xs', 'xl'),
        )}
        maxWidth={false}
      >
        <Box
          sx={{
            height: '81px',
            padding: '5px 32px 5px 40px',
            color: '#FFFFFF',
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            // height: '7.5vh',

            zIndex: 1,
            boxShadow: '0px 6px 24px 0px #0000001A',
          }}
        >
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28px',
              letterSpacing: '0px',
              textAlign: 'left',

              color: '#2A2A2A',
            }}
          >
            CHAT SESSIONS
          </Box>
          <Link to="/chat/new">
            <Button
              variant="contained"
              aria-label="open drawer"
              // size="small"
              sx={{
                // width: '142px',
                height: '32px',
                borderRadius: '50px',
                bgcolor: '#4282FE',
                color: 'white',
                fontFamily: 'Arial',
                fontSize: '12px',
                fontWeight: 700,
                lineHeight: '16px',
                letterSpacing: '0px',
                mt: 0,
                padding: '4px 20px 4px 20px',
              }}
            >
              NEW CHAT
            </Button>
          </Link>
        </Box>

        {/* <Drawer /> */}
      </Container>
    </ThemeProvider>
  )
}
