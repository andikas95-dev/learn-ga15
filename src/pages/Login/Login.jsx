import React, { useContext } from 'react';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { AppContext } from '../../App';
import ChangeNama from '../../components/ChangeNama/ChangeNama';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const queryLG = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const { nama, state, dispatch } = useContext(AppContext);

  return (
    <Grid
      container
      spacing={0}
      sx={{ height: '100vh', backgroundColor: 'tomato' }}
    >
      <Grid item xs={12} lg={6}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ height: '100%', backgroundColor: '#5200FF' }}
        >
          <div>
            <Typography
              variant="h2"
              align={queryLG ? 'right' : 'center'}
              gutterBottom
              sx={{
                fontFamily: 'Bebas Neue, cursive',
                width: '423px',
                color: '#fff',
              }}
            >
              {/* got marketing? advance your business insight. */}
              {nama}
            </Typography>
            <ChangeNama />
            <Typography
              variant="h6"
              align={queryLG ? 'right' : 'center'}
              sx={{
                fontFamily: 'Poppins, sans-serif',
                width: '423px',
                color: '#fff',
                fontWeight: '400',
              }}
            >
              {state.count}
              {/* Fill out the form and receive our award winning newsletter. */}
            </Typography>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          </div>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <button
          onClick={() => {
            console.log('test');
            navigate('/home');
          }}
        >
          Home
        </button>
      </Grid>
    </Grid>
  );
}

export default Login;
