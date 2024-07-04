import React, { useState } from 'react';
import Input from '../Atomos/Input';
import Button from '../Atomos/Button';

const LoginForm = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ usuario, password });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
          Usuario
        </label>
        <Input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <Input
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
};

export default LoginForm;
