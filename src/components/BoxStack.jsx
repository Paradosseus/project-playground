import React from 'react'
import { Box, Stack} from '@mui/material';


function BoxStack() {
  return (
    <div>
        {/* Box Component */}
       <Box component='section' sx={{p:2, border:'4px black solid', width: '300px', height: '300px', display: 'flex',}}>
        This is a box component
      </Box> 

        {/* Stack Component */}
        <Stack spacing={2} direction="row">
            <Box sx={{border: '1px solid black', width: '300px', height: '300px'}}></Box>
            <Box sx={{border: '1px solid black', width: '300px', height: '300px'}}></Box>
            <Box sx={{border: '1px solid black', width: '300px', height: '300px'}}></Box>
        </Stack>
    </div>
  )
}

export default BoxStack