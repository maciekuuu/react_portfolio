import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import React from 'react';

ReactDOM.render(<App/>, document.querySelector('#root'));
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );