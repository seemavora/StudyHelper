import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Routes'
import NavBar from './Pages/components/NavBar/NavBar';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Router />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
