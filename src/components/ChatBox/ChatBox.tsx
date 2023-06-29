import Box from '@mui/material/Box'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'

import InputAdornment from '@mui/material/InputAdornment'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import Submit from '../../assets/Submit.svg'
import Avatar from '@mui/material/Avatar'
import { Input } from '@mui/material'
import Actions from './Actions'
import PromptActions from './PromptActions'
import { Link, useLocation } from 'react-router-dom'
export default function ChatBox({ isPresent, progress, handleSend }: any) {
  // console.log(progress)
  const [isClick, setIsClick] = useState(false)
  const [isPromptClick, setIsPromptClick] = useState(false)
  const [sent, setSent] = useState(false)

  const location = useLocation()

  React.useEffect(() => {
    // console.log(location.pathname)
    if (location.pathname.includes('/chat/new')) {
      setSent(true)
    }
  }, [])
  const handleClick = () => {
    setIsClick((prev) => !prev)
  }
  if (progress === undefined) {
    progress = 100
  }
  const handlePrompt = () => {
    setIsPromptClick((prev) => !prev)
  }
  const handleClickPrompt = () => {
    if (isClick && isPromptClick) {
      setIsClick((prev) => !prev)
      setIsPromptClick((prev) => !prev)
    } else {
      setIsClick((prev) => !prev)
    }
  }

  return (
    <Box
      sx={{
        // height: '64px',
        // width: '100%',
        gap: '4px',
        id: 'search' + isPresent,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {isPresent && (
        <Box sx={{ position: 'absolute', bottom: 87 }}>
          <Actions
            isClick={isClick}
            handleClick={handleClick}
            isPromptClick={isPromptClick}
            handlePrompt={handlePrompt}
          />
          {isPromptClick && (
            <PromptActions
              isPromptClick={isPromptClick}
              handlePrompt={handlePrompt}
            />
          )}
        </Box>
      )}
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
      <Input
        sx={{
          height: '64px',
          // width: '100%',
          bgcolor: '#FFFFFF',
          gap: '4px',
          color: 'black',
          border: '1px solid #2C95D7',
          borderRadius: '8px',
          padding: '12px 16px 12px 16px',
          fontFamily: 'Arial',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '24px',
          letterSpacing: '0px',
          textAlign: 'left',
          mb: '4px',
        }}
        id="outlined-adornment-weight-box-one"
        disableUnderline={true}
        // disabled
        placeholder="Ex: Can you summarize the background verification clause from the uploaded document"
        startAdornment={
          isPresent && (
            <InputAdornment position="start" onClick={handleClickPrompt}>
              <Avatar
                sx={{
                  bgcolor: isClick ? '#4C618C' : '#1F3D70',
                  height: '40px',
                  width: '40px',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                {isClick ? (
                  <ClearRoundedIcon sx={{ color: 'white' }} />
                ) : (
                  <AddIcon sx={{ color: 'white' }} />
                )}
                {/* <img src={Submit} alt="" /> */}
              </Avatar>
            </InputAdornment>
          )
        }
        endAdornment={
          <InputAdornment position="end">
            {sent && (
              <Avatar
                onClick={() => handleSend()}
                sx={{
                  bgcolor: '#4282FE',
                  height: '40px',
                  width: '40px',
                  color: 'white',

                  // fontSize: '14px',
                }}
              >
                <img
                  src={Submit}
                  alt=""
                  style={{ height: '24px', width: '24px' }}
                />
              </Avatar>
            )}
            {!sent &&
              (progress === 100 ? (
                <Link
                  to="/chat/old/0"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: '#4282FE',
                      height: '40px',
                      width: '40px',
                      color: 'white',

                      // fontSize: '14px',
                    }}
                  >
                    <img
                      src={Submit}
                      alt=""
                      style={{ height: '24px', width: '24px' }}
                    />
                  </Avatar>
                </Link>
              ) : (
                <Avatar
                  sx={{
                    bgcolor: '#4282FE',
                    height: '40px',
                    width: '40px',
                    color: 'white',

                    // fontSize: '14px',
                  }}
                >
                  <img
                    src={Submit}
                    alt=""
                    style={{ height: '24px', width: '24px' }}
                  />
                </Avatar>
              ))}
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <Box
        sx={{
          fontFamily: 'Arial',
          fontSize: '12px',
          fontWeight: 400,
          lineheight: '18px',
          letterSpacing: '0px',
          textAlign: 'left',
          color: '#767676',
        }}
      >
        (Shift + enter for new line)
      </Box>
      {/* </FormControl> */}
    </Box>
  )
}
