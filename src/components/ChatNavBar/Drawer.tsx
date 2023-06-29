import { Avatar, Box, Container } from '@mui/material'
import React from 'react'

import ChatTabs from './ChatTabs'

import ClearRoundedIcon from '@mui/icons-material/ClearRounded'

export default function Drawer({ isClick, handleChange }: any) {
  return (
    <Container
      sx={{
        width: '20vw',
        height: '92.6vh',
        bgcolor: '#FFFFFF',
        float: 'right',
        // position: 'relative',
        // top: '10%',
        boxShadow: '0px 6px 24px 0px #0000001A',
        display: !isClick ? 'none' : 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '250px',
          flexDirection: 'column',
          // border: '1px solid',
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '236px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '22px',
              letterSpacing: '0px',
              textAlign: 'left',
            }}
          >
            Configuration
          </Box>
          <Box>
            <Avatar
              sx={{
                bgcolor: '#F4F4F4',
                height: '24px',
                width: '24px',
                color: 'black',
                fontSize: '16px',
              }}
              onClick={handleChange}
            >
              <ClearRoundedIcon fontSize="small" />
            </Avatar>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <ChatTabs />
        </Box>
        {/* <Box sx={{ mt: 4 }}>
          <ChatDeploySelectors />
        </Box> */}
        {/* <Box sx={{ mt: 4 }}>
          <ChatSessionSelectors />
        </Box> */}
        {/* <Box sx={{ mt: 4 }}>
          <TokenCounter />
        </Box> */}
      </Box>
    </Container>
  )
}
