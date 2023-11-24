import React from 'react';
import './App.css';
import PageRoutes from 'Routes/routes';
import { useNavigate } from "react-router-dom"


const App = () => {
  const navigate = useNavigate()


  return (
    <div className="oh-yes">
      <header>
        <p> Welcome fucker</p>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </header>
      <body>
      <PageRoutes/>
      </body>
      <footer>
        <p>This is a fucking website</p>
      </footer>
    </div>
  );
}

export default App;
