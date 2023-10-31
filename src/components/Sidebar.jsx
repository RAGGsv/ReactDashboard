import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation(); // Obtener la ubicación actual
  const pathname = location.pathname;

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/mantenimiento" className={pathname === '/mantenimiento' ? 'active' : ''}>
            Mantenimiento
          </Link>
        </li>
        <li>
          <Link to="/ajustes" className={pathname === '/ajustes' ? 'active' : ''}>
            Ajustes
          </Link>
        </li>
        <li>
          <Link to="/reportes" className={pathname === '/reportes' ? 'active' : ''}>
            Reportes
          </Link>
        </li>
        <li>
          <Link to="/usuario" className={pathname === '/usuario' ? 'active' : ''}>
            Usuario
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;