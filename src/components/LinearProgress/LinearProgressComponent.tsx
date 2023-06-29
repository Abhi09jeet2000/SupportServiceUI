import * as React from 'react'
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function LinearProgressComponent(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        {props.value === 100 ? (
          <LinearProgress variant="determinate" {...props} color="success" />
        ) : (
          <LinearProgress variant="determinate" {...props} />
        )}
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  )
}
