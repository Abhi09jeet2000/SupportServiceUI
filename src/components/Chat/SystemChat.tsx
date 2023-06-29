import { Avatar, Box } from '@mui/material'
import React, { useState } from 'react'

import DocDuplicate from '../../assets/DocDupl.svg'
import up from '../../assets/up.svg'
import down from '../../assets/down.svg'

export default function SystemChat({ children }: any) {
  const [like, setLike] = useState(false)
  const [dislike, setDisLike] = useState(false)
  const [copy, setCopy] = useState(false)
  const [copiedValue, setCopiedValue] = useState([])
  console.log()
  return (
    <Box
      sx={{
        bgcolor: '#D6EBF8',
        borderRadius: '8px',
        color: '#2A2A2A',
        fontFamily: 'Arial',
        fontSize: '14px',
        fontWeight: 400,
        // lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        float: 'left',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px 16px 24px',
        mb: 1,
      }}
    >
      <Box sx={{ maxWidth: '778px', lineSpacing: '10px' }}>{children}</Box>
      <Box
        sx={{
          ml: 1,
          fontSize: '16px',
          display: 'flex',
          // justifyContent: 'space-evenly',
          marginLeft: 'auto',
        }}
      >
        {copy && (
          <span
            style={{
              marginRight: 1,
              // marginTop: 4,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'lighter',
              fontSize: '15px',
              color: 'gray',
            }}
          >
            Copied
          </span>
        )}
        <Avatar
          onClick={() => {
            navigator.clipboard.writeText(
              children.map((child: any) => child.props.children).join(' '),
            )
            setCopy(!copy)
            setCopiedValue(children.map((child: any) => child.props.children)) //Saved in array as it will us to reuse in html or any other
            // console.log(children.map((child: any) => child.props.children))
          }}
          alt="Avatar"
          src={DocDuplicate}
          sx={{
            width: '16px',
            height: '16px',
            padding: 0.5,
            bgcolor: copy ? 'green' : '#4282FE',
            ml: 1,
            mr: 1,
            position: 'relative',
          }}
        />

        <Avatar
          alt="Avatar"
          src={up}
          onClick={() => {
            if (!dislike) setLike((prev) => !prev)
          }}
          sx={{
            width: '16px',
            height: '16px',
            padding: 0.5,
            bgcolor: like ? 'green' : '#4282FE',
            // m: 1,
          }}
        />
        <Avatar
          alt="Avatar"
          src={down}
          onClick={() => {
            if (!like) setDisLike((prev) => !prev)
          }}
          sx={{
            width: '16px',
            height: '16px',
            padding: 0.5,
            bgcolor: dislike ? 'red' : '#4282FE',
            ml: 1,
            mr: 1,
          }}
        />
      </Box>
    </Box>
  )
}
