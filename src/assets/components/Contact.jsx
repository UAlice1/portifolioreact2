// Contact.jsx

import React from 'react';

const Contact = () => {
    return (
        <div id="Contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="sub-title">Contact Me</h1>
                        <p><i class="fa-solid fa-paper-plane"></i>umubyeyialice7@gmail.com</p>
                        <p><i class="fa-solid fa-phone"></i>0790038006</p>
                        <div class="social-icons">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com/trix.alice/"><i class="fa fa-instagram"></i></a>
                        </div>
                        <a href="assets/CV ALICE.pdf" download class="btn">Download CV</a>
                    </div>
                    <div class="contact-right">
                        <form>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message" required></textarea>
                            <button type="submit" class="btn btn2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; Alice TRix <i class="fa-solid fa-heart"></i></p>
            </div>
        </div>
    );
};

export default Contact;
