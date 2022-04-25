import Profile from './components/Profile';
import Background from './components/Background';
import Experience from './components/Experience';
import Projects from './Projects';
import Contact from './components/Contact';

import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';
import { Typography } from '@mui/material';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito Sans',
        'sans-serif'
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Profile></Profile>
      <Background></Background>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </ThemeProvider>
  );
}

export default App;
