import React from 'react';
import Menu from './Menu'; // Asegúrate de que el nombre coincida con el nombre del archivo

function App() {
  return (
    <div className="App">
      <Menu />
      <div id="home">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Esta es la sección de inicio.</p>
      </div>
      <div id="about">
        <h1>Acerca de</h1>
        <p>Información sobre nosotros.</p>
      </div>
      <div id="services">
        <h1>Servicios</h1>
        <p>Descripción de los servicios que ofrecemos.</p>
      </div>
      <div id="contact">
        <h1>Contacto</h1>
        <p>Cómo contactarnos.</p>
      </div>
    </div>
  );
}

export default App;