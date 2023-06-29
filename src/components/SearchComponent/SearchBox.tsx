import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material'
import React from 'react'
import Search from '../../assets/search.svg'

export default function SearchBox({
  placeholder,
  handleSearchData,
  searchTerm,
  setSearchTerm,
  color,
}: // colour,
any) {
  // const [searchTerm, setSearchTerm] = useState('')

  // const handleSearch = () => {
  //   console.log(searchTerm)
  //   setSearchTerm('')
  // }
  return (
    <div>
      <FormControl
        variant="outlined"
        color={color}
        sx={{ width: '100%', bgcolor: placeholder === 'Search' ? 'white' : '' }}
      >
        <OutlinedInput
          // color="success"
          id="outlined-adornment-password"
          type="text"
          placeholder={placeholder}
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleSearchData(searchTerm)}
                edge="end"
              >
                {<img src={Search} alt="" width="14px" height="14px" />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  )
}
