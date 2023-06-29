import { Avatar, Box } from '@mui/material'
import React from 'react'
import Profile from '../../assets/Profile.svg'

export default function UserChat({ children }: any) {
  return (
    <Box
      sx={{
        bgcolor: '#E5EAEB',
        borderRadius: '50px',
        color: '#2A2A2A',
        fontFamily: 'Arial',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'right',
        display: 'flex',
        float: 'right',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 8px 4px 16px',
        mb: 1,
      }}
    >
      <Box>{children}</Box>
      <Box sx={{ ml: 1 }}>
        <Avatar
          alt="Avatar"
          src={Profile}
          sx={{ width: '32px', height: '32px', border: '1px solid white' }}
        />
      </Box>
    </Box>
  )
}
