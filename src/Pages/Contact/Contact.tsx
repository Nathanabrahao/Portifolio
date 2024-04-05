import React from 'react'
import NavBarHeader from '../../navbar';
import { SocialIcon } from 'react-social-icons';
import { socialMedias } from '../../Components/SocialMedias';
import "../Contact/Contact.css"

interface Props { }

const Contact = (props: Props) => {
    return (
        <>
            <header className="App-header">
                <NavBarHeader />
            </header>
            <div className="contact-container">
                <a href={socialMedias.github.url} className="contact-item github__area left" target="_blank" rel="noopener noreferrer">
                    <div>
                        {socialMedias.github.icon}
                        <br></br>
                        <span>{socialMedias.github.name}</span>
                    </div>
                </a>
                <a href={socialMedias.linkedin.url} className="contact-item linkedin__area center" target="_blank" rel="noopener noreferrer">
                    <div>
                        {socialMedias.linkedin.icon}
                        <br></br>
                        <span>{socialMedias.linkedin.name}</span>
                    </div>
                </a>
                <a href={socialMedias.gmail.url} className="contact-item gmail__area right" target="_blank" rel="noopener noreferrer">
                    <div>
                        {socialMedias.gmail.icon}
                        <br></br>
                        <span>{socialMedias.gmail.name}</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Contact;