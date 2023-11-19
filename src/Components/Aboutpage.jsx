import React from 'react';
import "./AboutPageStyle.css";

const Aboutpage = () => {
  return (
    <div className='content'>
      <h2 className="animate__animated animate__slideInRight">My Skills & More about me</h2>
      <p className="animate__animated animate__slideInUp">Innovative Software Developer with solid experience building and maintaining responsive websites and apps in collaborative environments. I find creative ways to solve problems for users while delivering the best experiences. I am always striving for mastery in my craft and offer full commitment to teamwork.</p>
      <p className="animate__animated animate__slideInUp">I'm a developer, passionate in building responsive, beautiful and accessible apps using clean and elegant code. When I’m behind the screen, I love playing football which contribute to my team work ability.</p>
      <p className="animate__animated animate__slideInUp">Here are a few technologies I've been working with recently:</p>

      <div className='skill'>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
      <div className="skill">
        <span>ReactJs</span>
        <span>Boostrap</span>
        <span>Git/GitHub</span>
      </div>
    </div>
  )
}

export default Aboutpage