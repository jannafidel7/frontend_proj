import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import { baselightTheme } from "./theme/DefaultColors";

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <ToastContainer />
      {routing}

    </ThemeProvider>
  );
}

export default App;
