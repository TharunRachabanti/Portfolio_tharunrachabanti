import React from 'react';
import FirstContainer from "./firstcontainer";
import SecondContainer from "./secondcontainer";
import Navbar from "./navbar";
import Projects from "./projects";
import Aboutme from "./aboutme";
import LastContainer from "./lastcontainer";

const MainContainer = () => {
  return (
    <React.Fragment>
      <div id="home">
        <Navbar />
      </div>
      <div id="services">
        <FirstContainer />
      </div>
      <div id="portfolio">
        <Projects />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <SecondContainer />
      <div id="contactme">
        <LastContainer/>
      </div>
    </React.Fragment>
  )
}

export default MainContainer;
