import React from 'react';
import './Home.css';
import myPhoto from '../assets/Kirandeep.JPG'; // Replace with your photo path

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div className="left-half">
        <img src={myPhoto} alt="Kirandeep" />
        <div className="tooltip">
          Hi, I'm KIRANDEEP KAUR, currently pursuing M.Tech from IIT JAMMU
        </div>
      </div>
      <div className="right-half">
        <div className="box">
          <h1>Welcome to My Portfolio</h1>
          <p>Your one-stop solution for amazing web development and design.</p>
          <button className="cta-button" onClick={scrollToProjects}>
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
