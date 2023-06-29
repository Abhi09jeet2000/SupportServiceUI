import {
  Box,
  Container,
  FormControl,
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

export default function ChatDeploySelectors() {
  const [model, setModel] = useState('Model1')
  const handleChange = (e: SelectChangeEvent) => {
    setModel(e.target.value as string)
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
          Deployment
        </Box>

        <FormControl
          fullWidth
          sx={{ height: '40px', color: '#767676' }}
          size="small"
          component="span"
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={model}
            // label="Models"
            onChange={handleChange}
            IconComponent={KeyboardArrowDownOutlinedIcon}
          >
            <MenuItem value={'Model1'}>Model1</MenuItem>
            <MenuItem value={'ModelN'}>ModelN</MenuItem>
          </Select>
        </FormControl>

        {/* </Box> */}
      </Container>
    </ThemeProvider>
  )
}
