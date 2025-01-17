import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './Logo/Logo_UTFSM.png';
import './Styles/validar.css';

// Definir el tipo de estado esperado
interface LocationState {
  photo: string | null;
}

const Validar: React.FC = () => {
  const location = useLocation<LocationState>(); // Aplicar el tipo LocationState
  const photo = location.state?.photo; // Obtener la foto pasada desde el estado

  // Estado para manejar el RUT ingresado
  const [rut, setRut] = useState('');

  const handleRutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRut(event.target.value);
  };

  const handleValidateClick = () => {
    alert(`RUT ingresado: ${rut}`);
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Plataforma toma de fotos USM</h1>
      </header>

      {/* Cuerpo del contenido entre el header y footer */}
      <div className="body-content">
        <div className="validar-foto-container">
          {/* Título arriba de la foto */}
          <h2>Valida tu RUT</h2>

          {/* Mostrar la foto si existe */}
          {photo ? (
            <img src={photo} alt="Foto tomada" className="taken-photo-validar" />
          ) : (
            <p>No se ha recibido ninguna foto.</p>
          )}

          {/* Campo para ingresar el RUT */}
          <div className="rut-container">
            <label htmlFor="rut">Ingresa tu RUT:</label>
            <input
              type="text"
              id="rut"
              value={rut}
              onChange={handleRutChange}
              placeholder="RUT"
              className="rut-input"
            />
          </div>

          {/* Botón de validación */}
          <button className="validate-button" onClick={handleValidateClick}>
            Validar RUT
          </button>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Plataforma toma de fotos USM. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Validar;
