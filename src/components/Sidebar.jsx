import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'

function Sidebar() {
  const location = useLocation(); // Obtener la ubicación actual
  const pathname = location.pathname;

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
          <FaIcons.FaHome/>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/mantenimiento" className={pathname === '/mantenimiento' ? 'active' : ''}>
           <FaIcons.FaFolder/> Mantenimiento
          </Link>
        </li>
        <li>
          <Link to="/ajustes" className={pathname === '/ajustes' ? 'active' : ''}>
          <FaIcons.FaTools/> Ajustes
          </Link>
        </li>
        <li>
          <Link to="/reportes" className={pathname === '/reportes' ? 'active' : ''}>
          <FaIcons.FaTasks/>Reportes
          </Link>
        </li>
        <li>
          <Link to="/usuario" className={pathname === '/usuario' ? 'active' : ''}>
          <FaIcons.FaUser/>Usuario
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;