import { Avatar, Box } from '@mui/material'
import React, { useState } from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import Uparraow from '../../assets/uparrow.svg'
import Cmd from '../../assets/cmd.svg'
import UploadModal from '../Modal/UploadModel'
function Actions({ isClick, handleClick, handlePrompt, isPromptClick }: any) {
  const [open, setOpenModal] = useState(false)
  const handleModal = () => {
    if (!open) {
      handleClick()
    }
    setOpenModal((prev) => !prev)
  }
  return (
    <Box
      sx={{
        width: '279px',
        height: '18vh',

        padding: '16px',
        borderRadius: '8px',
        gap: '12px',
        bgcolor: '#1F3D70',
        boxShadow: '0px 6px 24px 0px #00000040',
        display: isClick && !isPromptClick ? 'flex' : 'none',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <UploadModal open={open} handleModal={handleModal} />
      <Box
        sx={{
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            fontFamily: 'Arial',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '18px',
            letterSpacing: '0px',
            textAlign: 'left',
            color: '#FFFFFF',
          }}
        >
          AVAILABLE ACTIONS
        </Box>
        <Box>
          <Avatar
            sx={{
              bgcolor: '#F4F4F426',
              height: '24px',
              width: '24px',
              color: 'white',
              fontSize: '16px',
            }}
            onClick={handleClick}
          >
            <ClearRoundedIcon fontSize="small" />
          </Avatar>
        </Box>
      </Box>
      <Box sx={{}}>
        <Box
          onClick={handleModal}
          sx={{
            // width: '247px',
            // height: '40px',
            // gap: '8px',
            mb: 2,
            padding: '8px',
            borderRadius: '8px',
            bgcolor: '#4C618C',
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Box>
            <img
              src={Uparraow}
              alt=""
              style={{ width: '16.8px', height: '19.2px', marginTop: 2.5 }}
            />
          </Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '22px',
              letterSpacing: '0px',
              ml: 1,
              textAlign: 'left',
              color: '#FFFFFF',
            }}
          >
            Upload a New File
          </Box>
        </Box>
        <Box
          onClick={handlePrompt}
          sx={{
            // width: '247px',
            // height: '40px',
            // gap: '8px',
            mb: 1,
            padding: '8px',
            borderRadius: '8px',
            bgcolor: '#4C618C',
            // mt: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box>
            <img
              src={Cmd}
              alt=""
              style={{ width: '16.8px', height: '19.2px', marginTop: 2 }}
            />
          </Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '22px',
              letterSpacing: '0px',
              ml: 1,
              textAlign: 'left',
              color: '#FFFFFF',
            }}
          >
            Use Prompt Actions
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Actions
