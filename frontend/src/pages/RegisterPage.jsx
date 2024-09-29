import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';  

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const { register } = useContext(UserContext);  

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 carácteres');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas deben ser iguales');
      return;
    }

  
    try {
      await register(email, password);
      setMessage('¡Registro exitoso!');
    } catch (error) {
      setMessage('Error al registrar. Intenta nuevamente.');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
