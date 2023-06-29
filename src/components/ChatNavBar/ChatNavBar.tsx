import { Box, Button, Container } from '@mui/material'
import React from 'react'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Link } from 'react-router-dom'

const defaultTheme = createTheme({
  // palette: {
  //   background: {
  //     default: '#1F1C61',
  //   },
  // },
})

export default function ChatNavBar({ isClick, handleChange }: any) {
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
            height: '103px',
            padding: '16px 0px 0px 32px',
            color: '#FFFFFF',
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            // height: '7.5vh',

            zIndex: 1,
            boxShadow: '0px 6px 24px 0px #0000001A',
          }}
        >
          <Box
            sx={{
              justifyContent: 'space-around',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Link to="/chat/all">
              <Button
                variant="text"
                startIcon={<ChevronLeftOutlinedIcon />}
                // size="small"
                sx={{
                  // width: '142px',
                  height: '24px',
                  borderRadius: '50px',
                  bgcolor: '#F4F4F4',
                  color: 'black',
                  fontFamily: 'Arial',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: '16px',
                  letterSpacing: '0px',
                  textAlign: 'left',
                  padding: '4px 12px 4px 8px',
                }}
              >
                All Chat Sessions
              </Button>
            </Link>
            <Box
              sx={{
                fontFamily: 'Arial',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '26px',
                letterSpacing: '0px',
                textAlign: 'left',
                mb: '4px',
                color: '#2A2A2A',
              }}
            >
              CHAT SESSION
            </Box>
          </Box>
          {!isClick && (
            <Box sx={{ display: 'relative', top: '50%' }}>
              <Button
                variant="contained"
                aria-label="open drawer"
                startIcon={<ChevronLeftOutlinedIcon />}
                // size="small"
                sx={{
                  // width: '142px',
                  height: '24px',
                  borderRadius: '50px 0 0 50px',
                  bgcolor: '#1F3D70',
                  color: 'white',
                  fontFamily: 'Arial',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: '16px',
                  letterSpacing: '0px',
                  textAlign: 'left',
                  padding: '4px 12px 4px 8px',
                  boxShadow: '0px 4px 9px 0px #6E7CAD40',
                  top: '15%',
                }}
                onClick={handleChange}
              >
                Configuration
              </Button>
            </Box>
          )}
        </Box>
        {/* <Drawer /> */}
      </Container>
    </ThemeProvider>
  )
}

// function Drawer() {
//   return (
//     <Container
//       sx={{
//         width: '300px',
//         height: '92.6vh',
//         bgcolor: '#FFFFFF',
//         float: 'right',
//         position: 'relative',
//         top: '-14%',
//         boxShadow: '0px 6px 24px 0px #0000001A',
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           width: '250px',
//           flexDirection: 'column',
//           // border: '1px solid',
//           mt: 3,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             width: '236px',
//             justifyContent: 'space-between',
//           }}
//         >
//           <Box
//             sx={{
//               fontFamily: 'Arial',
//               fontSize: '16px',
//               fontWeight: 700,
//               lineHeight: '22px',
//               letterSpacing: '0px',
//               textAlign: 'left',
//             }}
//           >
//             Configuration
//           </Box>
//           <Box>
//             <Avatar
//               sx={{
//                 bgcolor: '#F4F4F4',
//                 height: '24px',
//                 width: '24px',
//                 color: 'black',
//                 fontSize: '16px',
//               }}
//               // onClick={}
//             >
//               <ClearRoundedIcon fontSize="small" />
//             </Avatar>
//           </Box>
//         </Box>
//         <Box sx={{ mt: 1 }}>
//           <ChatTabs />
//         </Box>
//         <Box sx={{ mt: 4 }}>
//           <ChatDeploySelectors />
//         </Box>
//         <Box sx={{ mt: 4 }}>
//           <ChatSessionSelectors />
//         </Box>
//         <Box sx={{ mt: 4 }}>
//           <TokenCounter />
//         </Box>
//       </Box>
//     </Container>
//   )
// }
