import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import Setting from '../../assets/Setting.svg'
import Question from '../../assets/Question.svg'
import Profile from '../../assets/Profile.svg'
import Avatar from '@mui/material/Avatar'
import SearchBox from '../SearchComponent/SearchBox'
import { Link } from 'react-router-dom'

const defaultTheme = createTheme()

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = () => {
    // console.log(searchTerm)
    setSearchTerm('')
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          // height: '7.5vh',
          height: '64px',
          zIndex: 1,
          boxShadow: '0px 6px 24px 0px #0000001A',
          padding: '12px 16px 12px 16px',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              fontFamily: 'Arial',
              fontSize: '21px',
              fontWeight: 700,
              lineHeight: '39px',
              letterSpacing: '0px',
              textAlign: 'left',
              color: '#351A55',
            }}
          >
            LogoPlaceholder
          </Box>
        </Link>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Box sx={{ width: '421px', height: '40px' }}>
            {/* <FormControl variant="outlined" sx={{ width: '100%' }}>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                placeholder="Global search"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleSearch}
                      onMouseDown={handleSearch}
                      edge="end"
                    >
                      {<img src={Search} alt="" width="14px" height="14px" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> */}
            <SearchBox
              placeholder="Global Search"
              handleSearchData={handleSearch}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {<img src={Setting} alt="" width="24px" height="24px" />}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {<img src={Question} alt="" width="24px" height="24px" />}
          </Box>
          <Link to="/login">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt="Avatar"
                src={Profile}
                sx={{ width: '32px', height: '32px' }}
              />
            </Box>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
