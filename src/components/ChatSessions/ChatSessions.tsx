import { Box, Container } from '@mui/material'
import React from 'react'
import ChatSessionsNavbar from './ChatSessionsNavBar'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import tableData from './tabledata.json'
import StylishTable from '../Table/StylishTable'

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#E9E9E9',
    },
  },
})

export default function ChatSessions() {
  // const [data, setData] = useState(tableData)
  // let searchedData = tableData
  // const handleSearch = (searchString: string) => {
  //   let searchedData = tableData.filter((values: any) => {
  //     for (let key in values) {
  //       if (values[key].includes(searchString)) {
  //         return true
  //       }
  //     }
  //     return false
  //   })
  //   // setData(searchedData)
  //   console.log(
  //     tableData.filter((values: any) => {
  //       for (let key in values) {
  //         if (values[key].includes(searchString)) {
  //           return true
  //         }
  //       }
  //       return false
  //     }),
  //   )
  // }

  // useEffect(() => {}, [data])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        disableGutters={useMediaQuery(
          defaultTheme.breakpoints.between('xs', 'xl'),
        )}
        maxWidth={false}
      >
        <Box sx={{ zIndex: 2 }}>
          <ChatSessionsNavbar />
        </Box>
        <Box sx={{ padding: 2 }}>
          {/* <Box sx={{ mt: 3, width: '30vw' }}>
            <SearchBox placeholder="Search" handleSearchData={handleSearch} />
          </Box> */}
          <Box sx={{}}>
            <StylishTable data={tableData} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
