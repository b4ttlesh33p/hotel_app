import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { SearchHeader } from './components/SearchHeader/SearchHeader';

function App() {
  return (
    <div className="App">
      <Box sx={{height: '100%', width:'100%', display:'flex', flexDirection: 'column', p: 2}}>
          <SearchHeader />
      </Box>
    </div>
  );
}

export default App;
