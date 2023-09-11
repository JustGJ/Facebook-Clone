import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from "@pages/Home";
import Login from "@pages/Login";
import PrivateRoute from '@components/router/PrivateRoute';
import { GlobalStyles } from './styles/reset';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@styles/themes';

const queryClient = new QueryClient();

export const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
);

const AppWrapper = () => {
  const [mode, setMode] = useState('light');
  const theme = mode === 'light' ? lightTheme : darkTheme;
  
  const toggleMode = () => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <App />
        <button onClick={toggleMode}>Toggle theme</button>
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default AppWrapper;