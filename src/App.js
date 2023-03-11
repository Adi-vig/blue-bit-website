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
// import Blur from "./components/blur.component"


import jobList from "./components/jobList.component"
import postJob from "./components/postJob.component"
import logIn from "./components/logIn.component"
import resources from "./components/resources.component"
import profile from "./components/profile.component"



function App() {
  return (
  
    
  <div className="container" >
   <Router>
    <BG />
      < Navbar style={{margin:"50px"}}/>
      
      {/* <br/> */}
      {/* <div style={{position:"fixed"}}>Hello world</div> */}
    <div style={{backgroundColor:"white", opacity:"40%", borderRadius:"10px",margin:"30px",padding:"30px",textAlign:"center"}}> 
      <div style={{color:"black", opacity:"100%",fontSize:"100px"}}>
      <Routes>
      <Route path="/" exact Component={jobList}/>
      <Route path="/postJob" exact Component={postJob}/>
      <Route path="/login" exact Component={logIn}/>
      <Route path="/resources" exact Component={resources}/>
      <Route path="/profile" exact Component={profile}/>
      </Routes>
     </div>
      </div>
   </Router>
   {/* <div class="container">
     <div class="row">
         <div class="col-md-12 parent">
             <div class="Full-Width" style={{height:"70vh",backgroundColor:"white", opacity:"40%", borderRadius:"10px"}}>Hello</div>
         </div>
     </div> */}
  </div>
  
  );
}

export default App;
