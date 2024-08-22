import React from 'react'
import { FormControlLabel, FormGroup, Checkbox } from '@mui/material'
function Checkbox() {
  return (
    <div>
            {/* Form label provides context to form elements like input fields, labels, and helper text */}
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label='Base'/>
            <FormControlLabel required control={<Checkbox/>} label='Required'/>
            <FormControlLabel disabled control={<Checkbox />} label='Disabled'/>
        </FormGroup>
    </div>
  )
}

export default Checkbox