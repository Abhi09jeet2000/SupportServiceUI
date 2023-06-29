import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'

import UploadIcon from '../../assets/Upload.svg'
import Document from '../../assets/Document.svg'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import Button from '@mui/material/Button'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import { Avatar } from '@mui/material'
import LinearProgressComponent from '../LinearProgress/LinearProgressComponent'
import { useLocation } from 'react-router'

const defaultTheme = createTheme({})
export default function Upload({ handleProgress }: any) {
  const [name, setName] = useState('')
  const [progress, setProgress] = useState(0)
  const [isBig, setIsBig] = useState(false)

  const location = useLocation()

  React.useEffect(() => {
    // console.log(location.pathname)

    if (location.pathname.includes('/chat')) {
      setIsBig(true)
    }
  }, [])

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 100 : prevProgress + 5,
  //     )
  //   }, 1000)
  //   // if (progress === 100) {
  //   //   clearInterval(timer)
  //   // }
  //   return () => {
  //     // setProgress(0)
  //     clearInterval(timer)
  //   }
  // }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    if (file) {
      setName(file[0].name)
    }
    // const reader = new FileReader()

    // reader.onloadend = () => {
    //   setPath(reader.result);
    // };

    // reader.readAsDataURL(file);
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 5,
      )
    }, 1000)
    if (progress === 100) {
      clearInterval(timer)
    }
  }

  useEffect(() => {
    handleProgress(progress)
  }, [progress])

  const resetProgress = () => {
    setName('')
    setProgress(0)
  }

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
            fontFamily: 'Arial',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '22px',
            letterSpacing: '0px',
            textAlign: 'left',
            margin: 0,
          }}
        >
          Try Document Uploader
        </Box>
        <Box
          sx={{
            height: '50px',
            padding: '16px',
            borderRadius: '8px',
            border:
              progress === 100 ? '1px dashed #6DC24B' : '1px dashed #4282FE',

            mt: 2,
            bgcolor: progress === 100 ? '#F6FBF3' : '#F4FBFF',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Box sx={{}}>
                {name.length > 0 ? (
                  <img
                    src={Document}
                    alt=""
                    style={{
                      filter:
                        progress === 100
                          ? 'invert(.5) sepia(1) saturate(40) hue-rotate(110deg)'
                          : '',
                    }}
                  />
                ) : (
                  <img src={UploadIcon} alt="" />
                )}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                <Box
                  sx={{
                    fontFamily: 'Arial',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    textAlign: 'left',
                    color: '#555555',
                  }}
                >
                  {name.length > 0 ? name : 'Drag and drop your file here'}
                </Box>
                <Box
                  sx={{
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    letterSpacing: '0px',
                    textAlign: 'left',
                    color: '#767676',
                  }}
                >
                  {name.length > 0 ? (
                    <Box
                      sx={{
                        width: isBig ? '950%' : '421px',
                        // minWidth: '421px',
                      }}
                    >
                      <LinearProgressComponent value={progress} />
                    </Box>
                  ) : (
                    ' Limit 15MB per file. Supported files: .PDF, .DOCX, .PPTX, .TXT, .XLSX'
                  )}
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {name.length > 0 ? (
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    sx={{
                      bgcolor: '#6DC24B',
                      height: '24px',
                      width: '24px',
                      color: 'white',
                      fontSize: '16px',

                      display: progress === 100 ? '' : 'none',
                      mr: 1,
                    }}
                  >
                    <CheckRoundedIcon fontSize="small" />
                  </Avatar>
                  <Avatar
                    sx={{
                      bgcolor: '#D6EDFC',
                      height: '24px',
                      width: '24px',
                      color: 'black',
                      fontSize: '16px',
                    }}
                    onClick={resetProgress}
                  >
                    <ClearRoundedIcon fontSize="small" />
                  </Avatar>
                </Box>
              ) : (
                <label htmlFor="upload">
                  <Button
                    size="small"
                    variant="outlined"
                    component="span"
                    sx={{
                      width: '117px',
                      height: '24px',
                      borderRadius: '50px',
                      border: '1.5px solid #4282FE',
                    }}
                  >
                    Browse File
                  </Button>

                  <input
                    hidden
                    accept="*"
                    id="upload"
                    multiple
                    type="file"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </label>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
