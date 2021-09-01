import React from 'react';
import './About.css';
import PageTittle from '../components/PageTittle';
import foto from '../images/foto.jpg';

function About() {
    return (
        <div className="about-contenedor">
            <PageTittle page="About" />
            <div className="about-content">
                <div className="aboutimg-container">
                    <img className="about-img" src={foto} alt=""/>
                </div>
                <div className="about-text">
                    <h2 className="about-tittle">Our Story</h2>
                    <div className="about-underline"></div>
                    <p className="about-story">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
