import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from './components/router/PrivateRoute';
import "./styles/main.scss";

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
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

export default AppWrapper;