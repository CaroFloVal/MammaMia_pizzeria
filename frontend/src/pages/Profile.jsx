import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';  
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { email, logout } = useContext(UserContext);  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  
    navigate('/login'); 
  };

  return (
    <div>
      <h2>Perfil del usuario</h2>
      <p>Email: {email}</p>  {}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Profile;
