import { Box, Pagination, Stack } from '@mui/material'
import * as React from 'react'
import Transfer from '../../assets/Transfer.svg'
import Ascending from '../../assets/ascending.svg'
import { useEffect, useState } from 'react'
import SearchBox from '../SearchComponent/SearchBox'
import usePagination from './Pagination'
import { Link } from 'react-router-dom'

export default function StylishTable({ data }: any) {
  const [columns, setColumns] = useState<string[]>([])

  const [searchTerm, setSearchTerm] = useState('')

  const [list, setList] = useState([...data])

  const [pageNo, setPageNo] = useState(1)

  const PER_PAGE = 7

  const count = Math.ceil(list.length / PER_PAGE)

  let _DATA = usePagination(list, PER_PAGE)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNo(value)
    _DATA.jump(value)
  }

  const handleSearch = (searchString: string) => {
    if (searchString.length === 0) {
      setList([...data])

      // setCount(Math.ceil(list.length / PER_PAGE))
    }
    let searchedData = data.filter((values: any) => {
      for (let key in values) {
        if (key !== 'id' && values[key].includes(searchString)) {
          return true
        }
      }
      return false
    })
    setList(searchedData)
    // const start = pageNo * PER_PAGE - PER_PAGE
    // const end = pageNo * PER_PAGE
    // setPaginatedList(searchedData.slice(start, end))
    // setCount(Math.ceil(searchedData.length / PER_PAGE))
    // console.log(
    //   data.filter((values: any) => {
    //     for (let key in values) {
    //       if (key !== 'id' && values[key].includes(searchString)) {
    //         return true
    //       }
    //     }
    //     return false
    //   }),
    // )
  }

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm])

  // const [sortedDate, setSortedData] = u

  // const [selectedCols, setSelectedCols] = useState(new Map<string, number>())
  // const [prevCols, setPrevCols] = useState('')

  const [order, setOrder] = useState('ascending')
  const [key, setKey] = useState('')

  const handleStringSort = (column: string) => {
    // if(key!==column){
    //   setList(data);
    // }
    setKey(column)
    let sortedData = []
    if (order === 'ascending') {
      sortedData = [...data].sort((a: any, b: any) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1,
      )
      setOrder('descending')
    } else if (order === 'descending') {
      sortedData = [...data].sort((a: any, b: any) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? -1 : 1,
      )
      setOrder('ascending')
    }
    setList(sortedData)
  }

  const handleDateSort = (column: string) => {
    setKey(column)
    let sortedData = []
    if (order === 'ascending') {
      sortedData = [...data].sort((a: any, b: any) => {
        let str1 = a[column]
          .split('')
          .filter((c: any) => c !== ',')
          .join('')
        str1 = str1
          .split(' ')
          .filter((s: any) => s !== 'at')
          .join(' ')

        let str2 = b[column]
          .split('')
          .filter((c: any) => c !== ',')
          .join('')
        str2 = str2
          .split(' ')
          .filter((s: any) => s !== 'at')
          .join(' ')

        const d1 = new Date(str1)
        const d2 = new Date(str2)

        if (d1 > d2) return 1
        else if (d1 < d2) return -1
        else return 0
      })

      setOrder('descending')
    } else if (order === 'descending') {
      sortedData = [...data].sort((a: any, b: any) => {
        let str1 = a[column]
          .split('')
          .filter((c: any) => c !== ',')
          .join('')
        str1 = str1
          .split(' ')
          .filter((s: any) => s !== 'at')
          .join(' ')

        let str2 = b[column]
          .split('')
          .filter((c: any) => c !== ',')
          .join('')
        str2 = str2
          .split(' ')
          .filter((s: any) => s !== 'at')
          .join(' ')

        const d1 = new Date(str1)
        const d2 = new Date(str2)

        if (d1 > d2) return -1
        else if (d1 < d2) return 1
        else return 0
      })
      setOrder('ascending')
    }
    setList(sortedData)
  }

  useEffect(() => {
    for (let key in data[0]) {
      setColumns((prev) => {
        if (!prev.includes(key) && key !== 'id') {
          // setSelectedCols((map) => new Map<string, number>(map.set(key, 0)))
          return [...prev, key] //.split('_').join(' ').toUpperCase()
        } else {
          return prev
        }
      })
    }
  }, [data])

  useEffect(() => {}, [searchTerm, count])

  if (columns.length === 0) {
    return <div></div>
  }

  return (
    <Box sx={{ height: '69vh' }}>
      <Box sx={{ mt: 3, width: '30vw' }}>
        <SearchBox
          placeholder="Search"
          handleSearchData={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          color="success"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          //styleName: TC-Type/Desktop/Tabs/Small-Tab;
          fontFamily: 'Barlow',
          fontSize: '11px',
          fontWeight: 600,
          lineHeight: '14px',
          letterSpacing: '0px',
          textAlign: 'left',
          mt: 4,
          mb: 1.5,
          // color: selectedCols.get(columns[0]) === 0 ? '#767676' : 'black',
        }}
      >
        <Box
          onClick={() => handleStringSort(columns[0])}
          sx={{
            width: '65%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // mb: 1,
          }}
        >
          <Box
            sx={{
              color: columns[0] !== key ? '#767676' : 'black',
              ml: 3,
            }}
          >
            {columns[0].split('_').join(' ').toUpperCase()}
          </Box>
          {columns[0] !== key && (
            <img
              src={Transfer}
              alt=""
              style={{ width: '16px', height: '16px' }}
            />
          )}
          {columns[0] === key && order === 'ascending' && (
            <img
              src={Ascending}
              alt=""
              style={{ width: '16px', height: '16px', color: 'black' }}
            />
          )}
          {columns[0] === key && order === 'descending' && (
            <img
              src={Ascending}
              alt=""
              style={{
                width: '16px',
                height: '16px',
                transform: 'scaleY(-1)',
                color: 'black',
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '31%',
          }}
        >
          {columns.slice(1).map((column) => (
            <Box
              onClick={() => handleDateSort(column)}
              key={column}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                color: key !== column ? '#767676' : 'black',
              }}
            >
              {column.split('_').join(' ').toUpperCase()}
              {key !== column && (
                <img
                  src={Transfer}
                  alt=""
                  style={{ width: '16px', height: '16px' }}
                />
              )}
              {key === column && order === 'ascending' && (
                <img
                  src={Ascending}
                  alt=""
                  style={{ width: '16px', height: '16px', color: 'black' }}
                />
              )}
              {key === column && order === 'descending' && (
                <img
                  src={Ascending}
                  alt=""
                  style={{
                    width: '16px',
                    height: '16px',
                    transform: 'scaleY(-1)',
                    color: 'black',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Stack spacing={2}>
        {_DATA.currentData().map((row: typeof data[0], index: number) => (
          <Box
            key={index}
            sx={{
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #E9E9E9',

              bgcolor: index % 2 === 0 ? '#FFFFFF' : '#F0F3F5',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'Arial',
              letterSpacing: '0px',
              textAlign: 'left',
              lineHeight: '18px',
            }}
          >
            <Link to={`/chat/old/${index}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#0D61BF',
                  width: '636px',
                }}
              >
                {row[Object.keys(row)[1]]}
              </Box>
            </Link>

            {Object.keys(row)
              .slice(2)
              .map((cell, index) => (
                <Box
                  key={cell + index}
                  sx={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#2A2A2A',
                  }}
                >
                  {row[cell]}
                </Box>
              ))}
          </Box>
        ))}
      </Stack>
      <Box
        sx={{
          m: 4,
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          // position: 'relative',
          // top: '80%',
          // left: '50%',
        }}
      >
        <Pagination onChange={handleChange} page={pageNo} count={count} />
      </Box>
    </Box>
  )
}
