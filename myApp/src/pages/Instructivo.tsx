import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from './Logo/Logo_UTFSM.png'; 
import './Styles/Instructivo.css';

const Instructivo: React.FC = () => {
  const history = useHistory(); // Hook para manejar la navegación

  const handleNext = () => {
    history.push('/camara'); // Redirige a la ruta de Camara
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Plataforma toma de fotos USM</h1>
      </header>

      {/* Cuerpo del contenido entre el header y footer */}
      <div className="body-content">
        <div className="instructivo-container">
          <h2>Instrucciones para utilizar la plataforma</h2>
          <ol className="steps-list">
            <li>
              <h3>1. Accede a la cámara</h3>
              <p>Al ingresar a la plataforma, se te solicitará permiso para acceder a la cámara de tu dispositivo. Asegúrate de aceptar esta solicitud para continuar.</p>
            </li>
            <li>
              <h3>2. Toma una foto</h3>
              <p>Cuando la cámara esté activada, verás una vista previa. Para capturar una foto, simplemente haz clic en el botón <strong>"Tomar foto"</strong>. La imagen tomada se mostrará junto a la vista previa de la cámara.</p>
            </li>
            <li>
              <h3>3. Usar o borrar la foto</h3>
              <p><strong>Usar foto:</strong> Si estás satisfecho con la foto, haz clic en "Usar Foto" para continuar.</p>
              <p><strong>Borrar foto:</strong> Si no te gusta la foto, haz clic en "Borrar Foto" para eliminarla y tomar una nueva.</p>
            </li>
            <li>
              <h3>4. Validar la foto</h3>
              <p>En la siguiente pantalla, se te pedirá que verifiques tu foto con tu RUT. Asegúrate de que la imagen capturada sea clara y esté correcta antes de validarla.</p>
            </li>
          </ol>
          {/* Botón de navegación */}
          <button className="next-button" onClick={handleNext}>
            Siguiente
          </button>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Plataforma toma de fotos USM. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Instructivo;
