
import './App.css';
import Box from '@mui/material/Box'
import { Header } from './ui/surfaces/header/header';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';
function App() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box >
      <Header />
      <main>
        <Box sx={{ pt: 15, maxWidth: 'sm', mx: 'auto' }} component={'section'} >
          <Typography component={'h1'} variant={matches ? 'h4' : 'h2'} align='center'>Album de fotos</Typography>
          <Typography paragraph variant={matches ? 'body2' : 'subtitle1'} align='center'
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
