import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "@components/common/PrivateRoute";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@styles/themes";
import Auth from "./views/auth";
import Feed from "./views/feed";
import { GlobalStyles } from "@styles/Global";

const queryClient = new QueryClient();

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
        }
      />
      <Route path="login" element={<Auth />} />
    </Routes>
  </Router>
);

const AppWrapper = () => {
  const [mode, setMode] = useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <App />
        <button onClick={toggleMode}>Toggle theme</button>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
