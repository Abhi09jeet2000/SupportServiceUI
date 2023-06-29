import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const defaultTheme = createTheme({})

interface Props {
  iconColor: String
  title: String
  children: React.ReactNode
}

export default function Card({
  iconColor,
  title,
  children,
}: PropsWithChildren<Props>) {
  // console.log(iconPath)
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        // disableGutters={useMediaQuery(
        //   defaultTheme.breakpoints.between('xs', 'xl'),
        // )}
        maxWidth={false}
        sx={{
          border: '1px solid #E9E9E9',
          width: '316px',
          height: '88px',
          borderRadius: '8px',
          // padding: '24px 16px 24px 16px',
          bgcolor: 'white',
          gap: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            sx={{ bgcolor: `${iconColor}`, width: '40px', height: '40px' }}
          >
            {children}
          </Avatar>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '24px',
              marginLeft: 1,

              color: '#2A2A2A',
            }}
          >
            {title}
          </Box>
        </Box>
        <Box sx={{}}>
          <Button
            variant="outlined"
            sx={{
              border: '1px solid black',
              borderRadius: '50px',
              color: 'black',
              width: '105px',
              height: '24px',
            }}
            size="small"
          >
            Start Now
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
