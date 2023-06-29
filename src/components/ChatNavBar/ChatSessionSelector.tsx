import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const defaultTheme = createTheme({
  // palette: {
  //   background: {
  //     default: '#1F1C61',
  //   },
  // },
})

export default function ChatSessionSelectors() {
  const [session, setSession] = useState('10')
  const handleChange = (e: SelectChangeEvent) => {
    setSession(e.target.value as string)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        // component="span"
        disableGutters={useMediaQuery(
          defaultTheme.breakpoints.between('xs', 'xl'),
        )}
        maxWidth={false}
      >
        {/* <Box> */}
        <Box
          // component="span"
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
          Session Settings
        </Box>

        <FormControl
          fullWidth
          sx={{ height: '40px', color: '#767676' }}
          size="small"
        >
          <InputLabel id="demo-simple-select-label-input">
            Previous messages included
          </InputLabel>
          <Select
            labelId="demo-simple-select-label-input-two"
            id="demo-simple-select-input"
            value={session}
            label="Previous messages included"
            onChange={handleChange}
            IconComponent={KeyboardArrowDownOutlinedIcon}
          >
            <MenuItem value={'10'}>10</MenuItem>
            <MenuItem value={'11'}>11</MenuItem>
          </Select>
        </FormControl>

        {/* </Box> */}
      </Container>
    </ThemeProvider>
  )
}
