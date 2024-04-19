
import React from 'react';
import './App.css';

const About = () => {
    return (
        <div>
            <div id="about"></div>
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src="./assets/images/alice4.jpg"/>
            </div>
            <div class="about-col-2">
                <h1 class="sub-title">About Me</h1>
                <p>As a frontend developer, you're the architect of user experiences
                    on the web. Your canvas is HTML, CSS, and JavaScript, where you craft
                    intuitive interfaces and engaging interactions. Your mastery extends
                    beyond mere code; you understand design principles, user psychology,
                    and accessibility standards. You're fluent in responsive design, ensuring
                    seamless experiences across devices. Proficient in CSS frameworks like Bootstrap
                    or Tailwind CSS, you effortlessly blend aesthetics with functionality.
                    Your JavaScript skills bring life to static pages, orchestrating animations,
                    handling user inputs, and fetching data asynchronously. With an eye for
                    detail and a passion for
                    innovation, you create delightful experiences that captivate users and elevate brands.

                    .</p>
                <div class="tab-titles">
                    <p class="tab-links active-link" onclick="opentab('Skills')">Skills</p>
                    <p class="tab-links" onclick="opentab('experience')">Experince</p>
                    <p class="tab-links" onclick="opentab('education')">Education</p>
                </div>
                <div class="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>CSS</span><br/>Designing Web/App Interface</li>
                        <li><span>PHP</span><br/> Web/App Development</li>
                        <li><span>HTML</span><br/>Building project.</li>
                    </ul>
                </div>
                <div class="tab-contents" id="experience">
                    <ul>
                        <li><span>2019</span><br/>Designing with CSS</li>
                        <li><span>2020</span><br/>Designing With Bootstrap</li>
                        <li><span>2024</span><br/>Frontend Developer</li>
                    </ul>
                </div>
                <div class="tab-contents" id="education">
                    <ul>
                        <li><span>2022</span><br/>Secondary School Award </li>
                        <li><span>2022</span><br/>Digital Skills Award</li>
                        <li><span>2024</span><br/>SheCanCode training</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
        
        </div>
    );
};

export default About;
