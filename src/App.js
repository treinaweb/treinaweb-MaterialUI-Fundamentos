
import './App.css';
import Box from '@mui/material/Box'
import { Header } from './ui/surfaces/header/header';
import { Typography } from '@mui/material';

function App() {
  return (
    <Box >
      <Header />
      <main>
        <Box sx={{ pt: 15, maxWidth: 'sm', mx: 'auto' }} component={'section'} >
          <Typography component={'h1'} variant='h4' align='center'>Album de fotos</Typography>
          <Typography paragraph variant='body2' align='center'
            sx={{ mt: 2 }}
          >
            Dolor aliqua commodo enim eiusmod. Ut laboris
            reprehenderit aliquip velit nulla magna. Eiusmod
            duis et sunt veniam. Sit eu sint incididunt ea laboris
            laborum mollit quis. Nisi dolore magna sunt enim nisi
            reprehenderit nisi.
          </Typography>
        </Box>
      </main>
    </Box>
  );
}

export default App;
