import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/page';
import LoginPage from './pages/LoginPage/page';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<div>Register page coming soon</div>} />
          <Route path="/dashboard" element={<div>Dashboard coming soon</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;