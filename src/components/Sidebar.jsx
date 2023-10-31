import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Sidebar(){
    return (
        <div>

<div class="sidebar">
  <ul>
  <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/mantenimiento">Mantenimiento</Link>
        </li>
        <li>
          <Link to="/ajustes">Ajustes</Link>
        </li>
        <li>
          <Link to="/reportes">Reportes</Link>
        </li>
        <li>
          <Link to="/usuario">Usuario</Link>
        </li>
  </ul>
</div>


        </div>

    )
}

 

export default Sidebar;