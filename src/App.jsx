import './App.css';
import { useEffect, useState } from 'react';
// import Header from './components/Header/Header';
import About from './pages/About/About';
import axios from 'axios';

function App() {
  const [nama, setNama] = useState('adam');
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (nama === 'adam') {
      setNama('Pravianti');
    }
    if (value) {
      setNama('Pravianti');
    }
    return () => {
      console.log('cleanup');
    };
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Nama Saya {nama}</div>
        <button onClick={() => setNama('Rafie')}>changeNama</button>
        <div>{JSON.stringify(value)}</div>
        <button onClick={() => setValue(!value)}>button</button>

        <About>
          <h1 style={{ color: 'tomato' }}>Ini adalah halaman About</h1>
        </About>
        {/* <Header title={nama} changeTitle={(value) => setNama(value)} /> */}

        {/* <h6>{count}</h6>
        <h6>{name}</h6>
        <input
          type="text"aa
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setCount(count + 1)}>plus</button>
        <button onClick={() => setCount(count - 1)}>minus</button> */}
      </header>
    </div>
  );
}

export default App;
