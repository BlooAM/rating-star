import React, { createContext } from 'react';
import { render } from 'react-dom';
import './index.css';
import colors from './data/color=data.json'
import App from './App';
import reportWebVitals from './reportWebVitals';

export const ColorContext = createContext();
render(
    <React.StrictMode>
      <ColorContext.Provider value={{ colors }}>
        <App />
      </ColorContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
