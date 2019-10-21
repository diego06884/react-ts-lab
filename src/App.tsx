import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import Counter from './Counter';

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
        <Employee handleInputChange={e => console.log(e.currentTarget.value)} age={33} person={testEmployee} fullName={formatName} />
        <Counter>
          {
            (count, setCount) => {
              return(
                <div>
                  <h2>Counter Component:</h2>
                  <h3>{count}</h3>
                  <button onClick={()=>{setCount(count + 1)}}>+</button>
                </div>
              )
            }
          }
        </Counter>
        <Counter>
          {
            (count, setCount) => {
              return(
                <div>
                  <h2>Counter Component Count: <span>{count}</span></h2>
                  <button onClick={()=>{setCount(9)}}>-</button>
                </div>
              )
            }
          }
        </Counter>
      </header>
    </div>
  );
}

export default App;
