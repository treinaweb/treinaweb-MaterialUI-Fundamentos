import logo from './logo.svg';
import './App.css';
import { Box, Typography, Link } from '@mui/material'

function App() {
  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant='h6' paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Link

          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </Box>
  );
}

export default App;
