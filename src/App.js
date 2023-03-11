// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import {BrowserRouter as Router, Route, route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar.component"
import BG from "./components/Background.component"

function App() {
  return (
  
    
  <div className="container" >
   <Router>
    <BG />
      < Navbar style={{margin:"50px"}}/>
      {/* <br/> */}
      {/* <div style={{position:"fixed"}}>Hello world</div> */}

      {/* <Routes>
      <Route path="/" exact Component={Joblist}/>
      <Route path="/add" exact Component={signin}/>
      <Route path="/" exact Component={Joblist}/>
      <Route path="/" exact Component={Joblist}/>
      </Routes> */}

   </Router>
   </div>
  );
}

export default App;
