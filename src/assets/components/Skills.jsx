// Skills.jsx

import React from 'react';

const Skills = () => {
    return (
        <div id="Skills">
        <div class="container">
            <h1 class="sub-title">My Skills</h1>
            <div class="services-list">
                <div>




                    <i class="fa-brands fa-html5"></i>
                    <h2>Html</h2>
                    <p>HTML skills encompass proficiency in structuring web
                        content using elements like headings, paragraphs,
                        lists, links, and images. Mastery extends to
                        understanding semantic markup, forms, tables,
                        multimedia, and accessibility features,
                        enabling the creation of well-organized,
                        accessible, and SEO-friendly web pages. </p>
                    <a href="#">Learn More</a>
                </div>

                <div>
                    <i class="fa-brands fa-css3"></i>
                    <h2> Css</h2>
                    <p>CSS skills involve proficiency in styling web content,
                        including layout, colors, typography, and animations.
                        Mastery encompasses understanding selectors, specificity,
                        box model, flexbox, grid layout, and responsive design,
                        enabling the creation
                        of visually appealing and functional user interfaces across
                        various devices. </p>
                    <a href="#">Learn More</a>
                </div>

                <div>
                    <i class="fa-brands fa-php"></i>
                    <h2> PHP</h2>
                    <p>
                        PHP skills involve proficiency in server-side scripting for
                        web development. This includes understanding data types, variables,
                        control structures, functions, and object-oriented programming. Expertise
                        extends to working with databases, handling forms, sessions,
                        cookies, security practices, and integrating with web servers like Apache or Nginx </p>
                    <a href="#">Learn More</a>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Skills;
