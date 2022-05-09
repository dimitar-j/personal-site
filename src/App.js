import Profile from './components/Profile';
import Background from './components/Background';
import Experience from './components/Experience';
import Projects from './Projects';
import Contact from './components/Contact';

import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito Sans',
        'sans-serif'
      ].join(','),
      h1: {
        fontWeight: 700,
        fontSize: "42px"
      },
      h2: {
        fontWeight: 700,
        fontSize: "2em"
      },
      h3: {
        fontWeight: 700,
        fontSize: "2em"
      },
      body: {
        fontSize:"22px",
        fontWeight: "light"
      }
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
