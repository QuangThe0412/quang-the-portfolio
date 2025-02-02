import React, { useEffect } from 'react';
import './circle-nav.css';

const navItems = ['section1', 'section2', 'section3', 'section4'];
function CircleNav() {

    return (
        <nav className="circle-menu">
            <ul id='menu'>
                <li className='objective'>
                    <a href="#objective">Objective</a>
                </li>
                <li className='work'>
                    <a href="#work">Experience</a>
                </li>
                <li className='education'>
                    <a href="#education">Education</a>
                </li>
                <li className='skills'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='projects'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='random'>
                    <a href="#random">Random</a>
                </li>
            </ul>
        </nav>
    );
}

export default CircleNav;