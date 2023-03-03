import './App.css';
import Labs from "./Labs/index.js";
import Tuiter from "./Tuiter/index.js";
import HelloWorld from "./Labs/a6/HelloWorld.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import React from "react";

function App() {
  return (

      <BrowserRouter>

          <div className="container">

              <Routes>

                  <Route index="/labs" element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>

              </Routes>

          </div>

      </BrowserRouter>

  );
}

export default App;
