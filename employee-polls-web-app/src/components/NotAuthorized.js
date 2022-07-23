import { Button, Typography } from '@mui/material';
import React from 'react';
  
const NotAuthorized = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <div>
      <Typography variant="h3" color="text.primary" align="center">
        You are not authorized to visit this page.
        </Typography>
        <Typography variant="h6" color="text.primary" align="center">
          Please <Button variant="contained" color='primary' href='/sign-in'>Sign In</Button> to continue.
        </Typography>
      </div>
    </div>
  );
};
  
export default NotAuthorized;