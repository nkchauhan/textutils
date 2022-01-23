import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.production.min";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
    <BrowserRouter>
      <NavBar title="TextUtils" aboutText ="About"  mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode}/>}>
        </Route>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
