import React, { useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '../Card/Card'

import Contracts from '../../assets/Contracts.svg'
import Helpdesk from '../../assets/Helpdesk.svg'
import Rfp from '../../assets/Rfp.svg'
import Forecast from '../../assets/Forecast.svg'
import useMediaQuery from '@mui/material/useMediaQuery'
import Upload from '../Upload/Upload'
import ChatBox from '../ChatBox/ChatBox'

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#1F1C61',
    },
  },
})

export default function MainComponent() {
  const [progress, setProgress] = useState(0)
  const handleProgress = (num: number) => {
    setProgress(num)
    // console.log(progress)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        disableGutters={useMediaQuery(
          defaultTheme.breakpoints.between('xs', 'xl'),
        )}
        maxWidth={false}
        sx={{
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',

          // border: '1px solid',
          textAlign: 'left',
          width: '648px',
          height: '80vh',
          gap: '32px',
          marginLeft: 0,
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: '32px',
              letterSpacing: '0px',
              color: '#2A2A2A',
            }}
          >
            Welcome
          </Box>

          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',

              color: '#555555',
            }}
          >
            Start by choosing an automate model from the list or typing your own
            query below:
          </Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '22px',
              color: '#2A2A2A',
              mt: 3,
            }}
          >
            CHOOSE A SKILL
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <Box sx={{ height: '110px' }}>
              <Card iconColor="#FFCD2E" title="Contracts">
                <img src={Contracts} alt="" />
              </Card>
            </Box>
            <Box sx={{ height: '110px' }}>
              <Card iconColor="#1F1C61" title="Helpdesk">
                <img src={Helpdesk} alt="" />
              </Card>
            </Box>
            <Box sx={{ height: '110px' }}>
              <Card iconColor="#793196" title="RFP">
                <img src={Rfp} alt="" />
              </Card>
            </Box>
            <Box sx={{ height: '110px' }}>
              <Card iconColor="#BE266A" title="Forecast">
                <img src={Forecast} alt="" />
              </Card>
            </Box>
          </Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#555555',
            }}
          >
            Ok,
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: 0,
            gap: '32px',
          }}
        >
          <Upload handleProgress={handleProgress} />
        </Box>
        <ChatBox progress={progress} />
      </Container>
    </ThemeProvider>
  )
}
