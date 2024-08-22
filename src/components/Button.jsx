import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
function Button() {
  return (
    <div>
        {/* Button */}
      <Button variant='contained'>Contained</Button>
      <br/>
      <Button variant='outlined'>Outlined</Button>
      <br/>
      <Button variant='text'>Text</Button>
      <br/>
      <Button variant='contained' disabled>Disabed</Button>
      <br/>
      <Button variant='contained' disableElevation>Disabled Elevation</Button>
        <ButtonGroup variant='contained'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  )
}

export default Button