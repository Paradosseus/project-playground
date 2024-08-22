import './App.css'
import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';

export default function App() {

  const [message, setMessage] = useState("")

  const handleCopy = () => {
    setMessage('Copied!')
  }

  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis temporibus necessitatibus aut, consectetur voluptatem perferendis magni laboriosam magnam ipsum architecto alias, rerum incidunt, dicta mollitia. Molestiae ab fuga quae!"
  

  return (
    <>
        <Box>
          {message && <strong>{message}</strong>}
          <Typography variant='body1'>{content}</Typography>
          <CopyToClipboard text={content} onCopy={()=> handleCopy()}>
            <button>Copy to Clipboard</button>
          </CopyToClipboard>
        </Box>
    </>
  )
}

