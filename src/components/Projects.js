import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>PROJECTS</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Handwritten Digit Recognition</h3>
          <p>Developed a CNN model achieving 98% accuracy in classifying handwritten digits from the MNIST dataset.</p>
          <p>Enhanced input data quality using normalization and binarization, and optimized model training with the Adam optimizer.</p>
          <p>Evaluated model performance using accuracy, precision, and confusion matrix, and visualized training progress and model features.</p>
        </div>
        <div className="project-card">
          <h3>Gaussian 3D Splatting Image Processing</h3>
          <p>Developed a 3D image processing system using Gaussian 3D Splatting for enhanced 3D face modeling visualization.</p>
          <p>Leveraged NeRF, attention mechanisms, and learning-based depth completion for high-quality 3D reconstructions.</p>
          <p>Achieved real-time performance with robustness to noise and scalability to large scenes.</p>
          <p>Applied the system to precise measurement, virtual prototyping, and cultural heritage preservation.</p>
        </div>
      </div>
      <h3>Skills & Technologies</h3>
      <div className="skills-tech">
        <span className="skills-tech-item">C/C++</span>
        <span className="skills-tech-item">Python</span>
        <span className="skills-tech-item">SQL</span>
        <span className="skills-tech-item">VS Code</span>
        <span className="skills-tech-item">CSS</span>
        <span className="skills-tech-item">React</span>
        <span className="skills-tech-item">HTML</span>
      </div>
      <div className="contact-call-to-action">
        <p>Interested in working with me? <a href="/contact">Get in touch!</a></p>
      </div>
    </div>
  );
}

export default Projects;
