import { Box } from '@mui/material'
import React from 'react'
import LinearCounterBar from './LinearCounterBar'

export default function TokenCounter() {
  return (
    <Box>
      <Box
        sx={{
          fontFamily: 'Arial',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '16px',
          letterSpacing: '0px',
          textAlign: 'left',
          color: '#2A2A2A',
          mb: 2,
        }}
      >
        Current Token Count
      </Box>
      <Box
        sx={{
          fontFamily: 'Arial',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '22px',
          letterSpacing: '0px',
          textAlign: 'left',
          color: '#555555',
          mb: 2,
        }}
      >
        Input tokens progress indicator
      </Box>
      <Box>
        <LinearCounterBar value={Math.ceil((642 / 4000) * 100)} />
      </Box>
    </Box>
  )
}
