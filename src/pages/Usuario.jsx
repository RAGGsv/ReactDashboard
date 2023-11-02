
import React, { useEffect, useState } from 'react';

function Usuario(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error('Error al cargar usuarios:', error));
    }, []);


    const [dogImageUrl, setDogImageUrl] = useState('');

    useEffect(() => {
      // Hacer la solicitud a la API aquí
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          // Actualizar el estado con la URL de la imagen del perro
          setDogImageUrl(data.message);
        })
        .catch((error) => {
          console.error('Error al cargar la imagen del perro:', error);
        });
    }, []); // El segundo argumento es un arreglo de dependencias vacío para que se ejecute solo una vez al montar el componente
  

    return (
        <div class="content">
                 <div ><h1>Usuario</h1>
                <h2>Imagen de un perro</h2>
      {dogImageUrl && <img src={dogImageUrl} alt="Perro aleatorio" />} </div>
        
      <div className="card">
      <h1>Lista de Usuarios</h1>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
        
        </div>
        

    )
}

 

export default Usuario;