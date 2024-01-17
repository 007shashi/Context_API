import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const App = () => {
  const [value, setValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      <div className="App">
        <header className="App-header">
          <h1 className="header">Context API</h1>
          <ChildComponent />
        </header>
      </div>
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);
  const [color, setColor] = useState('black');

  const toggleValue = () => {
    setValue((prevValue) => {
      setColor(prevValue === 'Default Value' ? 'red' : 'black');
      return prevValue === 'Default Value' ? 'New Value' : 'Default Value';
    });
  };

  return (
    <div>
      <span>Click Button to change Value </span> 
      <p  className="value" style={{ color }}>{value}</p>
      <button className="valueButton" onClick={toggleValue}>
        Change Value
      </button>
    </div>
  );
};

export default App;
