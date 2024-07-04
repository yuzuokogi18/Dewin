import React, { useState } from 'react';
import Swal from 'sweetalert2';
import LoginForm from '../Molecules/LoginForm';

const LoginPage = () => {
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
    

    if (credentials.usuario === 'checador' && credentials.password === '1234') {
      console.log('Login successful!');


      Swal.fire({
        icon: 'success',
        title: 'Bienvenido checador',
        showConfirmButton: false,
        timer: 1500  
      });

      setShowWelcomeAlert(true);
    } else {
      console.log('Invalid credentials');
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales incorrectas',
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
