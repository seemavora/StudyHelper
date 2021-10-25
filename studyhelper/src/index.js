import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Pages/ContactUs/ContactUs.css";
import Router from "./Routes";
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
