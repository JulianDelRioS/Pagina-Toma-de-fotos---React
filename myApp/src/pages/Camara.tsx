import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importar useHistory
import logo from './Logo/Logo_UTFSM.png';
import './Styles/Camara.css';
const Camara: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photo, setPhoto] = useState<string | null>(null); // Foto en base64
  const [isPhotoTaken, setIsPhotoTaken] = useState<boolean>(false); // Control del estado de la foto
  const history = useHistory(); // Inicializar useHistory

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 300, height: 300 },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
      }
    };

    enableCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = 300;
        canvas.height = 300;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const photoData = canvas.toDataURL('image/jpeg', 0.7);

        if (getBase64Size(photoData) <= 70000) {
          setPhoto(photoData);
          setIsPhotoTaken(true);
        } else {
          alert('La foto es demasiado grande. Intenta nuevamente.');
        }
      }
    }
  };

  const deletePhoto = () => {
    setPhoto(null);
    setIsPhotoTaken(false);
  };

  const getBase64Size = (base64Data: string) => {
    const str = base64Data.replace(/^data:image\/(png|jpeg);base64,/, '');
    return (str.length * 3) / 4;
  };

  const usePhoto = () => {
    // Redirigir a validar.tsx y pasar la foto como estado
    history.push('/validar', { photo });
  };

  return (
    <div>
      {/* Encabezado */}
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Plataforma toma de fotos USM</h1>
      </header>

      {/* Subtítulo */}
      <h2 className="subtitle">Toma tu Foto</h2>

      {/* Contenedor de cámara y foto */}
      <div className="camera-container">
        <video ref={videoRef} autoPlay playsInline className="camera-feed"></video>

        {/* Imagen tomada, si existe */}
        <div className={`photo-container ${photo ? 'has-photo' : ''}`}>
          {photo ? (
            <img src={photo} alt="Foto tomada" className="taken-photo" />
          ) : (
            <div className="no-photo-placeholder">No se ha tomado foto</div>
          )}
        </div>

        {/* Botones de acción */}
        <div className="photo-actions">
          <button
            onClick={takePhoto}
            className="take-photo-btn"
            disabled={isPhotoTaken}
          >
            Sacar Foto
          </button>
          {isPhotoTaken && (
            <>
              <button onClick={deletePhoto} className="delete-photo-btn">
                Borrar Foto
              </button>
              <button onClick={usePhoto} className="use-photo-btn">
                Usar Foto
              </button>
            </>
          )}
        </div>
      </div>

      {/* Pie de página */}
      <footer>
        <p>&copy; 2025 Plataforma toma de fotos USM. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Camara;
