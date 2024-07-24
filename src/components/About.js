import React, { useState } from 'react';
import './About.css';
import profilePhoto from '../assets/Kiran.jpg'; // Replace with your profile photo path


function About() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className={`about-image-container ${activeSection ? 'half' : ''}`}>
          <img src={profilePhoto} alt="Profile" />
          <div className="overlay">
            <div className="intro-text">
              <h1>"Believe in yourself and all that you are."</h1>
            </div>
            <div className="about-buttons">
              <button className="about-button" onClick={() => setActiveSection('education')}>Education</button>
              <button className="about-button" onClick={() => setActiveSection('skills')}>Skills</button>
              <button className="about-button" onClick={() => setActiveSection('achievements')}>Achievements</button>
            </div>
          </div>
        </div>
        <div className={`about-content ${activeSection ? '' : 'hidden'}`}>
          <div className="about-details">
            {activeSection === 'education' && (
              <div className="about-details-section">
                <h2>Education</h2>
                <ul>
                  <li>M.Tech (CSE), Indian Institute of Technology, Jammu, 2025</li>
                  <li>B.Tech (CSE), Guru Nanak Dev University, Amritsar, 2023</li>
                  <li>12th Standard, Grace Public Senior Secondary School, Amritsar</li>
                  <li>10th Standard, Sri Guru Harkrishan Public School, Amritsar</li>
                </ul>
              </div>
            )}
            {activeSection === 'skills' && (
              <div className="about-details-section">
                <h2>Skills</h2>
                <ul>
                  <li>Programming Languages: C/C++, Python, SQL</li>
                  <li>Softwares: MySQL, VS Code</li>
                  <li>Web Development: CSS, React, HTML</li>
                  <li>Relevant Coursework: Data Structure and Algorithm, Machine Learning, Operating System, Database Management System, Computer Network, Theory of Computation, Natural Language Processing, Image Processing</li>
                </ul>
              </div>
            )}
            {activeSection === 'achievements' && (
              <div className="about-details-section">
                <h2>Achievements</h2>
                <ul>
                  <li>Solved over 250 problems on LeetCode, honing proficiency in data structures and algorithms (DSA).</li>
                  <li>Received a medal for scoring the highest aggregate marks across the entire school in Class XII.</li>
                  <li>Consistently ranked first from classes I to XII, demonstrating sustained academic excellence.</li>
                  <li>Awarded a certificate and medal for achieving the highest marks in the Amritsar Maths Olympiad 2011.</li>
                  <li>Secured a top 1% rank with All India Rank 1137 in the Graduate Aptitude Test in Engineering (GATE) 2023.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
