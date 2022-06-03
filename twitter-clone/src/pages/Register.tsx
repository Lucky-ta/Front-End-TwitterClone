import React from 'react';
import RegisterField from '../components/RegisterField';

export default function Register() {
  return (
    <div className="welcome-page">
      <div className="register-form">
        <h2 className="register-name">Registrar-se</h2>
        <RegisterField />
      </div>
    </div>
  );
}
