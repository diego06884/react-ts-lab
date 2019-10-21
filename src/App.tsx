import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

const App: React.FC = () => {
  const testEmployee =  {
    firstName: 'Diego',
    lastName: 'Vergara',
  };
  function formatName (fn:string, ln: string) {
    return `Employee full name: ${fn} - ${ln}`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Employee age={33} person={testEmployee} fullName={formatName} />
      </header>
    </div>
  );
}

export default App;
