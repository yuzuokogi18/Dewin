import React from 'react';

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
