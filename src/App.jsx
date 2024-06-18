// // App.jsx

// import React, { useState } from "react";
// import './App.css';
// import MainContainer from "./containers/maincontainer";
// import FirstContainer from "./containers/firstcontainer";
// import SecondContainer from "./containers/secondcontainer";
// import Navbar from "./containers/navbar";
// import Projects from "./containers/projects";
// import Aboutme from "./containers/aboutme";
// import LastContainer from "./containers/lastcontainer";

// function App() {

//   return (
//     <React.Fragment>
//         <div id="home">
//         <Navbar />
//       </div>
//       <div id="services">
//         <FirstContainer />
//       </div>
//       <div id="portfolio">
//         <Projects />
//       </div>
//       <div id="aboutme">
//         <Aboutme />
//       </div>
//       <SecondContainer />
//       <div id="contactme">
//         <LastContainer/> 
//       </div>
       
    
//       <MainContainer></MainContainer>
//     </React.Fragment>
//   );
// }

// export default App;


// import React from "react";
// import './App.css';
// import MainContainer from "./containers/maincontainer";

// function App() {
//   return (
//     <MainContainer />
//   );
// }

// export default App;



import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from "./containers/maincontainer";
import Personal from "./containers/personal";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route exact path="/portfolio" element={<MainContainer />} />
        <Route exact path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  );
}

export default App;
