import "./App.css";
import Form from "./components/Form.js";
import Steps from "./components/Steps.js";
import React from "react";
import { useState } from "react";


const App = ()=>{
  const [pageno, setPageno] = useState(0);

  return (
  <div className="App">
    <Steps pageno={pageno} setPageno={setPageno}/>
    <Form pageno={pageno} setPageno={setPageno}/>
  </div>
  );
}
export default App;