import React from 'react';
import facebookIcon from '../../images/Facebook Icon.png';
import githubIcon from '../../images/GitHub Icon.png';
import instagramIcon from '../../images/Instagram Icon.png';
import linkedinIcon from '../../images/Linkedin Icon.png';
import twitterIcon from '../../images/Twitter Icon.png';




export default function Footer() {
    return (
    <footer className="footer-container">
        <button><img src={facebookIcon} alt="Facebook icon"></img></button>
        <button><img src={githubIcon} alt="GitHub icon"></img></button>
        <button><img src={instagramIcon} alt="Instagram icon"></img></button>
        <button><img src={linkedinIcon} alt="Linkedin icon"></img></button>
        <button><img src={twitterIcon} alt="Twitter"></img></button>
    </footer>
    )
}