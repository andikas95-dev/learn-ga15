import { useState, createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

export const AppContext = createContext({
  nama: '',
  setNama: () => {},
});

const initialState = { count: 0 };

function AppReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [nama, setNama] = useState('adam');
  const theme = createTheme();
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppContext.Provider
          value={{
            nama,
            setNama,
            state,
            dispatch,
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Router>
        </AppContext.Provider>
      </Provider>
    </ThemeProvider>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div>Nama Saya {nama}</div>
  //       <button onClick={() => setNama('Rafie')}>changeNama</button>
  //       <div>{JSON.stringify(value)}</div>
  //       <button onClick={() => setValue(!value)}>button</button>

  //       <About>
  //         <h1 style={{ color: 'tomato' }}>Ini adalah halaman About</h1>
  //       </About>
  //       {/* <Header title={nama} changeTitle={(value) => setNama(value)} /> */}

  //       {/* <h6>{count}</h6>
  //       <h6>{name}</h6>
  //       <input
  //         type="text"aa
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <button onClick={() => setCount(count + 1)}>plus</button>
  //       <button onClick={() => setCount(count - 1)}>minus</button> */}
  //     </header>
  //   </div>
  // );
}

export default App;
