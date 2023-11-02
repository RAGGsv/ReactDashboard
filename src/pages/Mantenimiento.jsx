import React, { useState } from 'react';

function Mantenimiento() {
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    direccion: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para manejar los datos enviados, por ejemplo, enviarlos a un servidor.
    console.log(datos);
  };

  return (
    <div className="content">
      <h1>Mantenimiento</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nombre">Nombre:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={datos.nombre}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="correo">Correo:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={datos.correo}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="direccion">Dirección:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={datos.direccion}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="telefono">Teléfono:</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={datos.telefono}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Mantenimiento;