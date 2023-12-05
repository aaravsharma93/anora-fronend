import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { UIContextProvider } from '../contexts/UIContext';

export default function Loader() {
  const [loading, setLoading] = useState(false);
  return (
    <UIContextProvider loading={loading} setLoading={setLoading}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => setLoading(false)}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </UIContextProvider>
  );
}
