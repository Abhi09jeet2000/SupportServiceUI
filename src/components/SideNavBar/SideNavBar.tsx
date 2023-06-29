import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const defaultTheme = createTheme({
  // palette: {
  //   background: {
  //     default: '#1F1C61',
  //   },
  // },
})

export default function SideNavBar() {
  const [selectedValue, setSelectedValue] = React.useState('home')

  const location = useLocation()

  React.useEffect(() => {
    // console.log(location.pathname)
    if (location.pathname === '/') {
      setSelectedValue('home')
    } else if (location.pathname.includes('/chat')) {
      setSelectedValue('chat')
    }
  }, [])
  // setSelectedValue('home')
  const listStyle = {
    width: '218px',
    height: '56px',
    padding: '16px 0px 16px 0px',
    border: '0px 0px 1px 0px',
    gap: '8px',
    borderBottom: '1px solid #FFFFFF40',
  }

  const textStyles = {
    fontFamily: 'Arial',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'left',
    color: 'white',
  }

  const iconStyle = {
    width: '24px',
    height: '24px',
    color: 'white',
  }

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    // console.log(e.currentTarget.className)
    let cName = e.currentTarget.className
    if (cName.includes('home')) {
      setSelectedValue('home')
    } else if (cName.includes('chat')) {
      setSelectedValue('chat')
    } else if (cName.includes('analytics')) {
      setSelectedValue('analytics')
    } else if (cName.includes('setting')) {
      setSelectedValue('setting')
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth={false}
        disableGutters={useMediaQuery(
          defaultTheme.breakpoints.between('xs', 'xl'),
        )}
        sx={{
          height: '92.6vh',

          bgcolor: '#1F1C61',
          // width: '250px',
          width: '250px',
          marginLeft: 0,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <List
          sx={{
            // width: '100%',
            maxWidth: '250px',
            bgcolor: '#1F1C61',
            gap: '8px',
            margin: 0,
            padding: '16px',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem
              sx={listStyle}
              className="home"
              onClick={(e) => handleClick(e)}
            >
              <ListItemAvatar>
                <HomeOutlinedIcon
                  sx={{
                    ...iconStyle,
                    color: selectedValue === 'home' ? '#FFCD2E' : 'white',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Home"
                sx={{
                  ...textStyles,
                  color: selectedValue === 'home' ? '#FFCD2E' : 'white',
                }}
              />
              {selectedValue === 'home' && (
                <ChevronRightOutlinedIcon
                  sx={{ color: '#FFCD2E', width: '16px', height: '16px' }}
                />
              )}
            </ListItem>
          </Link>
          <Link to="/chat/all" style={{ textDecoration: 'none' }}>
            <ListItem
              sx={listStyle}
              className="chat"
              onClick={(e) => handleClick(e)}
            >
              <ListItemAvatar>
                <ForumOutlinedIcon
                  sx={{
                    ...iconStyle,
                    color: selectedValue === 'chat' ? '#FFCD2E' : 'white',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Chat Sessions"
                sx={{
                  ...textStyles,
                  color: selectedValue === 'chat' ? '#FFCD2E' : 'white',
                }}
              />
              {selectedValue === 'chat' && (
                <ChevronRightOutlinedIcon
                  sx={{ color: '#FFCD2E', width: '16px', height: '16px' }}
                />
              )}
            </ListItem>
          </Link>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <ListItem
              sx={listStyle}
              className="analytics"
              onClick={(e) => handleClick(e)}
            >
              <ListItemAvatar>
                <InsertChartOutlinedOutlinedIcon
                  sx={{
                    ...iconStyle,
                    color: selectedValue === 'analytics' ? '#FFCD2E' : 'white',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Analytics"
                sx={{
                  ...textStyles,
                  color: selectedValue === 'analytics' ? '#FFCD2E' : 'white',
                }}
              />
              {selectedValue === 'analytics' && (
                <ChevronRightOutlinedIcon
                  sx={{ color: '#FFCD2E', width: '16px', height: '16px' }}
                />
              )}
            </ListItem>
          </Link>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <ListItem
              sx={listStyle}
              className="setting"
              onClick={(e) => handleClick(e)}
            >
              <ListItemAvatar>
                <SettingsOutlinedIcon
                  sx={{
                    ...iconStyle,
                    color: selectedValue === 'setting' ? '#FFCD2E' : 'white',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Settings"
                sx={{
                  ...textStyles,
                  color: selectedValue === 'setting' ? '#FFCD2E' : 'white',
                }}
              />
              {selectedValue === 'setting' && (
                <ChevronRightOutlinedIcon
                  sx={{ color: '#FFCD2E', width: '16px', height: '16px' }}
                />
              )}
            </ListItem>
          </Link>
        </List>
        <Box
          sx={{
            position: 'absolute',
            top: '87%',
            width: '218px',
          }}
        >
          <Link to="/chat/new">
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: '50px',
                visibility: selectedValue !== 'chat' ? 'hidden' : 'visible',
              }}
              size="medium"
            >
              <Typography
                sx={{
                  fontFamily: 'Arial',
                  fontSize: '13px',
                  fontWeight: 700,
                  lineHeight: '24px',
                  letterSpacing: '0.008em',
                  // textAlign: 'left',
                }}
              >
                New Chat
              </Typography>
            </Button>
          </Link>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Arial',
                fontSize: '11px',
                fontWeight: 400,
                lineHeight: '24px',
                textAlign: 'center',
                color: 'white',
                mt: 3,
              }}
            >
              Copyright Placeholder - Version 1.0
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
