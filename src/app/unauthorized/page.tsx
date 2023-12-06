"use client";
import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'

export let router: any = null;

const ForbiddenMessage = () => {
  router = useRouter();

  return (
    <Paper elevation={3} style={{ margin: '20px', padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Forbidden Access!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You do not have permission to access this resource.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button variant="contained" color="secondary">
          Go Home
        </Button>
        <Button variant="outlined" color="secondary">
          Try Again
        </Button>
      </Stack>

    </Paper>
  );
};

export default ForbiddenMessage;