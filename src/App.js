import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Ajustes from './pages/Ajustes';
import Mantenimiento from './pages/Mantenimiento';
import Reportes from './pages/Reportes';
import Usuario from './pages/Usuario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/mantenimiento" element={<Mantenimiento />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
 

export default App;
