import "./App.css";
// import About from "./components/about";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";

// import { BrowserRouter , Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("dark mode has been enabled", "success");
      document.title = 'Textutils - dark Mode';
    //   setInterval(() => {
    //     document.title= 'Made By Rajat';
    //   }, 2000);
    //   setInterval(() => {
    //     document.title= 'Teach By Harry';
    //   }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} Heading="Enter The Text To Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;





/* <>
    <BrowserRouter>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      
        <Routes>
        <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} Heading="Enter The Text To Analyze" mode={mode} />} />
        </Routes>
      
      </div>
      </BrowserRouter>
</> */