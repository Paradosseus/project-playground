import React from 'react'
import { Slider, styled, Typography } from '@mui/material';

function CustomComponent() {

    const CustomSlider = styled(Slider)(({theme}) => ({
        // Creating a new component based on Slider using styled function
        //destructuring the theme object to access its properties
        width: 100,
        color: theme.palette.error.main,
        backgroundColor: theme.palette.primary.main,
        '&:hover' : {
          backgroundColor: theme.palette.augmentColor.main
        }
      }))
    

  return (
    <>
        <Typography
            variant='h6'
        >Custom Component</Typography>
        <CustomSlider/>
        <br/>
        <Typography variant='h6'>Slider customized with the sx prop</Typography>
        <Slider
            sx={{
                width: 600,
                color: 'success.main'
            }}
        />

    </>
  )
}

export default CustomComponent