import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Avatar, TextField } from '@mui/material'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import UploadIcon from '../../assets/Upload.svg'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: '60vh',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: '0px 1px 5px 0px #00000033',
  backdropFilter: 'blur(100px)',
  // filter: 'blur(3px)',
  // boxShadow: 24,
  p: 4,
}

export default function UploadModal({ open, handleModal }: any) {
  const [name, setName] = React.useState('')

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files

    if (file) {
      setName(file[0].name)
      console.log(file[0].name)
    }
    // const reader = new FileReader()

    // reader.onloadend = () => {
    //   setPath(reader.result);
    // };

    // reader.readAsDataURL(file);
  }
  return (
    <div>
      {/* <Button onClick={handleModal}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
              <Box onClick={handleModal}>
                <Avatar
                  sx={{
                    bgcolor: '#F4F4F4',
                    height: '24px',
                    width: '24px',
                    color: 'black',
                    fontSize: '16px',
                  }}
                  // onClick={handleClick}
                >
                  <ClearRoundedIcon fontSize="small" />
                </Avatar>
              </Box>
            </Box>
            <Box sx={{ border: '1px solid #F4F4F4', mt: '16px' }} />
            <Box
              sx={{
                // width: '576px',
                height: '17vh',
                padding: '60px 142px 60px 142px',
                borderRadius: '8px',
                bgcolor: '#F4FBFF',
                border: '1px dashed #4282FE',
                gap: '4px',
                mt: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src={UploadIcon}
                  alt=""
                  style={{ width: '40px', height: '40px', margin: '8px' }}
                />
                <Typography
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
                  Drag and drop your file here
                </Typography>

                <Box
                  sx={{
                    fontFamily: 'Arial',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    letterSpacing: '0px',
                    textAlign: 'left',
                    color: '#555555',
                    display: 'flex',
                    m: 1,
                  }}
                >
                  Or&nbsp;
                  <label htmlFor="upload">
                    <Typography
                      sx={{
                        fontFamily: 'Arial',
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: '22px',
                        letterSpacing: '0px',
                        textAlign: 'left',
                        color: '#4282FE',
                      }}
                    >
                      click here&nbsp;
                    </Typography>
                    <input
                      hidden
                      accept="*"
                      id="upload"
                      multiple
                      type="file"
                      onChange={(e) => handleFileUpload(e)}
                    />
                  </label>
                  to upload from your computer
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    letterSpacing: '0px',
                    // textAlign: 'left',
                    color: '#767676',
                    width: '378px',
                    // m: 1,
                  }}
                >
                  Limit 15MB per file. Supported files: .PDF, .DOCX, .PPTX,
                  .TXT, .XLSX
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  fontFamily: 'Arial',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  letterSpacing: '0px',
                  textAlign: 'left',
                  color: '#2A2A2A',
                }}
              >
                Or you can also import a file from URL
              </Box>
              <Box sx={{ height: '40px', width: '100%', mt: 1 }}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="http://"
                />
              </Box>
            </Box>
            <Box sx={{ border: '1px solid #F4F4F4', mt: '24px', mb: '24px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button
                onClick={handleModal}
                variant="outlined"
                sx={{
                  width: '272px',
                  height: '32px',
                  padding: '4px 20px 4px 20px',
                  borderRadius: '24px',
                  border: '2px solid #2A2A2A',
                  gap: '4px',
                  color: '#2A2A2A',
                }}
              >
                {' '}
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: '272px',
                  height: '32px',
                  padding: '4px 20px 4px 20px',
                  borderRadius: '24px',
                  color: '#FFFFFF',
                  gap: '4px',
                  bgcolor: '#4282FE',
                }}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
