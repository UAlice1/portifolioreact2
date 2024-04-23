// Project.jsx

import React from 'react';

const Projects = () => {
    return (
        <div id="Project">
            <div className="container">
                <h1 className="sub-title">My Projects</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="./src/assets/images/brarchitect.png" alt="Project 1" />
                        <div className="layer">
                            <h3>Br Architect</h3>
                            <p>This Br Architect is my first Project I've done when learning HTML and CSS.</p>
                            <a href="#"><i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="./src/assets/images/rockgame.png" alt="Project 2" />
                        <div className="layer">
                            <h3>Paper, Scissors, Rock Game</h3>
                            <p>This Paper, Scissors, Rock Game is my first Project I've done when learning JavaScript and Tailwind CSS.</p>
                            <a href="#"><i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="./src/assets/images/agecalcu.png" alt="Project 3" />
                        <div className="layer">
                            <h3>Age Calculator</h3>
                            <p>This Age Calculator is my first Project I've done when learning how to make responsive designs in JavaScript.</p>
                            <a href="#"><i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See More</a>
            </div>
        </div>
    );
};

export default Projects;
