import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<div>Login page coming soon</div>} />
        <Route path="/register" element={<div>Register page coming soon</div>} />
        <Route path="/dashboard" element={<div>Dashboard coming soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;