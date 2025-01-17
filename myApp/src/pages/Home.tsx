import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory para la redirección
import './Styles/Home.css';
import logo from './Logo/Logo_UTFSM.png'; // Ajusta la ruta si es necesario

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Inicializa useHistory

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirigir a instructivo.tsx después del login
    history.push('/instructivo');
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Plataforma toma de fotos USM</h1>
      </header>

      {/* Cuerpo del contenido entre el header y footer */}
      <div className="body-content">
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Iniciar sesión</h2>
            <div className="input-group">
              <label htmlFor="username">Correo</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu Correo"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" className="login-button">Iniciar sesión</button>
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Plataforma toma de fotos USM. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Login;
