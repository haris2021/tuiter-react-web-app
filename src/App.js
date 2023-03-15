import './App.css';
import Labs from "./Labs/index.js";
import Tuiter from "./Tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import React from "react";
import Assignment7 from "../src/Labs/a7/index.js";

function App() {

    console.log("inside app");

  return (

      <BrowserRouter>

          <div className="container">

              <Routes>

                  <Route index element={<Labs/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
                  <Route path="/a7" element={<Assignment7/>}> </Route>

              </Routes>

          </div>

      </BrowserRouter>

  );
}

export default App;
