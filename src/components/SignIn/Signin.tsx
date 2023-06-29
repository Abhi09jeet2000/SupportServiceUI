import * as React from 'react'
// import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
// import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { Visibility } from '@mui/icons-material'
import Microsoft from '../../assets/microsoft.svg'
// TODO remove, this demo shouldn't need to reset the theme.
import Icon from '../../assets/Icon.svg'
import Bg from '../../assets/bg.svg'
import { Link } from 'react-router-dom'

const defaultTheme = createTheme()

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [disableButton, setDisableButton] = useState(true)
  const [error, setError] = useState(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log(email, password)
    if (error && email && password) {
      setError(false)
    }
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setError(false)
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // console.log(re.test(String(e.target.value).toLowerCase()))
    if (!re.test(String(e.target.value).toLowerCase())) setError(true)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',
          zIndex: 10,
          position: 'absolute',
          top: '0',
          backgroundColor: 'white',
        }}
      >
        <Container
          component="main"
          // maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            zIndex: 100,
            width: '600px',
            height: '506px',
            // background: 'white',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              width: '600px',
              height: '506px',
              top: '164.5px',
              // left: '420px',
              borderRadius: '10px',
              gap: '36px',
              padding: '52px 60px 40px 60px',
              boxShadow: '0px 6px 24px 0px #0000001A',
              // border: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
           
          </Avatar> */}
            <Box
              sx={{
                fontWeight: 700,
                fontSize: '21.49px',
                color: '#351A55',
                lineHeight: '39.41px',
              }}
            >
              LogoPlaceholder
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
                width: '352px',
                // height: '256px',

                gap: '36px',
                position: 'relative',
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
                placeholder="Enter your work email"
                name="email"
                // autoComplete="email"
                type={'email'}
                autoFocus
                onChange={(e) => handleEmailChange(e)}
                value={email}
                color="success"
                size="small"
                error={error}
                helperText={error && 'Enter valid email'}
                sx={{ mb: 2.5, width: '352px', height: '40px' }}
              />
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                value={password}
                fullWidth
                placeholder="Password"
                color="success"
                sx={{
                  mb: 1,
                  width: '352px',
                  height: '40px',
                  // position: 'relative',
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {!showPassword ? (
                        <Visibility />
                      ) : (
                        <img src={Icon} alt="" width="20px" height="20px" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                  width: '352px',
                  height: '40px',
                  // position: 'absolute',
                  margin: 'auto',
                  // left: '60px',
                }}
              >
                <FormControlLabel
                  // required
                  // sx={{ display: 'flex' }}
                  control={<Checkbox size="small" />}
                  label="Remember me"
                />

                {/* <Link href="#" variant="body2"> */}
                <Box sx={{ fontWeight: 'regular', fontSize: 15, marginTop: 1 }}>
                  Forgot password?
                </Box>
                {/* </Link> */}
              </Box>
              <Link to="/">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: '50px',
                    width: '352px',
                    height: '40px',
                  }}
                >
                  <Box sx={{ fontWeight: 'bold', fontSize: 15 }}>LOGIN</Box>
                </Button>
              </Link>
              <Link to="/">
                <Button
                  // type="submit"

                  fullWidth
                  variant="outlined"
                  size="medium"
                  sx={{
                    mt: 0,
                    mb: 2,
                    borderRadius: '50px',
                    border: '1.5px solid black',
                    justifyContent: 'space-around',
                    width: '352px',
                    height: '40px',
                  }}
                >
                  <img src={Microsoft} style={{ width: '22px' }} alt="" />

                  <Box
                    sx={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}
                  >
                    LOGIN WITH SINGLE SIGN ON
                  </Box>
                </Button>
              </Link>

              <Box
                sx={{
                  fontWeight: 'regular',
                  fontSize: 15,
                  marginTop: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                No account yet?
                <Box sx={{ fontWeight: 'bold', fontSize: 15 }}> Create one</Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  )
}
