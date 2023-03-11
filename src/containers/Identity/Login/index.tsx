import React from 'react';

export default function Login() {
  console.log('Login:');
  return (
    <div>
      <p>Login</p>
      <a className="App-link" href="/" rel="noopener noreferrer">
        Go Home
      </a>
      <br />
      <a className="App-link" href="/identity/register" rel="noopener noreferrer">
        Go to Register
      </a>
    </div>
  );
}
