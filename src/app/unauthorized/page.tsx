"use client";
import { Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'

export let router: any = null;

const ForbiddenMessage = () => {
  router = useRouter();

  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Forbidden Access!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You do not have permission to access this resource.
      </Typography>
      <Button variant="contained" color="secondary">
        Go Back
      </Button>
      <Button variant="outlined" color="secondary">
        Try Again
      </Button>
    </Paper>
  );
};

export default ForbiddenMessage;