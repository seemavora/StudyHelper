import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Routes'

function App() {
  return (
      <Router />
 
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;