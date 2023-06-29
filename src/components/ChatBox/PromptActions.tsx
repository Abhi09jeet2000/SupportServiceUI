import { Avatar, Box } from '@mui/material'
import React from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'

import promptActions from './promptActions.json'
function PromptActions({ isPromptClick, handlePrompt }: any) {
  // promptActions.GENERATE.forEach((value) => console.log(value))
  return (
    <Box
      sx={{
        width: '380px',
        height: '75vh',

        padding: '16px',
        borderRadius: '8px',
        gap: '16px',
        bgcolor: '#1F3D70',
        boxShadow: '0px 6px 24px 0px #00000040',
        display: isPromptClick ? 'flex' : 'none',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
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
          PROMPT ACTIONS
        </Box>
        <Box onClick={handlePrompt}>
          <Avatar
            sx={{
              bgcolor: '#F4F4F426',
              height: '24px',
              width: '24px',
              color: 'white',
              fontSize: '16px',
            }}
            // onClick={handleClick}
          >
            <ClearRoundedIcon fontSize="small" />
          </Avatar>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '11px',
              fontWeight: 700,
              lineHeight: '12px',
              letterSpacing: '1px',
              textAlign: 'left',
              color: '#FFFFFF',
              mb: 1,
              // mb: 0.5,
            }}
          >
            GENERATE
          </Box>
          <Box>
            {
              // data = promptActions['GENERATE'];
              promptActions['GENERATE'].map((value) => (
                <Box
                  key={value.name}
                  sx={{
                    // width: '247px',
                    // height: '48px',
                    // gap: '8px',
                    padding: '4px 8px 4px 8px',
                    borderRadius: '8px',
                    bgcolor: '#4C618C',
                    mt: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: '14px',
                      fontWeight: 700,
                      lineHeight: '22px',
                      letterSpacing: '0px',
                      textAlign: 'left',
                      color: '#FFFFFF',
                    }}
                  >
                    {value.name}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '18px',
                      letterSpacing: '0px',
                      textAlign: 'left',
                      color: '#FFFFFF',
                    }}
                  >
                    {value.desc}
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '11px',
              fontWeight: 700,
              lineHeight: '12px',
              letterSpacing: '1px',
              textAlign: 'left',
              color: '#FFFFFF',
              mt: 1.5,
              mb: 1,
            }}
          >
            ANALYZE
          </Box>
          <Box>
            {
              // data = promptActions['GENERATE'];
              promptActions['ANALYZE'].map((value) => (
                <Box
                  key={value.name}
                  sx={{
                    // width: '247px',
                    height: '48px',
                    gap: '8px',
                    padding: '4px 8px 4px 8px',
                    borderRadius: '8px',
                    bgcolor: '#4C618C',
                    mt: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: '14px',
                      fontWeight: 700,
                      lineHeight: '22px',
                      letterSpacing: '0px',
                      textAlign: 'left',
                      color: '#FFFFFF',
                    }}
                  >
                    {value.name}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '18px',
                      letterSpacing: '0px',
                      textAlign: 'left',
                      color: '#FFFFFF',
                    }}
                  >
                    {value.desc}
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '11px',
              fontWeight: 700,
              lineHeight: '12px',
              letterSpacing: '1px',
              textAlign: 'left',
              color: '#FFFFFF',
              mb: 1,
              mt: 1.5,
            }}
          >
            SYNTHESIZE
          </Box>
          <Box>
            {
              // data = promptActions['GENERATE'];
              promptActions['SYNTHESIZE'].map((value) => (
                <Box
                  key={value.name}
                  sx={{
                    // width: '247px',
                    height: '48px',
                    gap: '8px',
                    padding: '4px 8px 4px 8px',
                    borderRadius: '8px',
                    bgcolor: '#4C618C',
                    mt: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: '14px',
                      fontWeight: 700,
                      lineHeight: '22px',
                      letterSpacing: '0px',
                      textAlign: 'left',
                      color: '#FFFFFF',
                    }}
                  >
                    {value.name}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '18px',
                      letterSpacing: '0px',
                      textAlign: 'left',
                      color: '#FFFFFF',
                    }}
                  >
                    {value.desc}
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PromptActions
