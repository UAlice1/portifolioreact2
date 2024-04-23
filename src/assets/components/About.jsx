import React, { useState } from 'react';


const About = () => {
    const [activeTab, setActiveTab] = useState('Skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
        
    };

    return (
        <div>
            <div id="About"></div>
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="./images/alice4.jpg" alt="Alice" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
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
                        </p>
                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => openTab('Skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => openTab('Experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => openTab('Education')}>Education</p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>CSS</span><br />Designing Web/App Interface</li>
                                <li><span>PHP</span><br /> Web/App Development</li>
                                <li><span>HTML</span><br />Building project.</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>2019</span><br />Designing with CSS</li>
                                <li><span>2020</span><br />Designing With Bootstrap</li>
                                <li><span>2024</span><br />Frontend Developer</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2022</span><br />Secondary School Award </li>
                                <li><span>2022</span><br />Digital Skills Award</li>
                                <li><span>2024</span><br />SheCanCode training</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
