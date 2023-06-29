import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Box from '@mui/material/Box'
import ChatDeploySelectors from './ChatDeploySelectors'
import ChatSessionSelectors from './ChatSessionSelector'
import TokenCounter from './TokenCounter'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function ChatTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box
        sx={{
          borderBottom: '2px',
          borderColor: 'divider',
          fontFamily: 'Arial',
          fontSize: '11px',
          fontWeight: 700,
          lineHeight: '24px',
          letterSpacing: '0px',
          textAlign: 'left',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Deployment" {...a11yProps(0)} />
          <Tab label="Parameters" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ mt: 4 }}>
          <ChatDeploySelectors />
        </Box>
        <Box sx={{ mt: 4 }}>
          <ChatSessionSelectors />
        </Box>
        <Box sx={{ mt: 4 }}>
          <TokenCounter />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Item Two
        </p>
      </TabPanel>
    </Box>
  )
}
