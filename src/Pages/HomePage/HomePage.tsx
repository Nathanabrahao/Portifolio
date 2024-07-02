import React from 'react'
import "../HomePage/HomePage.css"
import NavBarHeader from '../../navbar';
import { socialSkills } from '../../Components/SocialMedias';
import CV from '../../Cv.pdf';

interface Props { }

const HomePage = (props: Props) => {
    return (
        <div className="App" >
            <header className="App-header">
                <NavBarHeader />
            </header>
            <body className='App-body' >
                <h1 className='Main-name'>
                    Nathan Abrahão
                </h1>
                <p className='text_main'>
                    I'm full stack developer, gamer and reader
                    <br />
                    FrontEnd Engineer using HTML, CSS, JavaScript, TypeScript, React, Angular
                    <br />
                    BackEnd Engineer using Node.js, Express.js, MongoDB, SQL, Java, Python, C#
                    <br />
                    <a href={CV} download="Curriculo" className='download-cv-button'>
                        Download CV
                    </a>
                </p>
                <div className="icon__skills">{socialSkills.html.icon}{socialSkills.css.icon}{socialSkills.js.icon}{socialSkills.tss.icon}{socialSkills.react.icon}
                {socialSkills.angular.icon}{socialSkills.sql.icon}{socialSkills.nodejs.icon}{socialSkills.java.icon}{socialSkills.python.icon}</div>
            </body>
        </div>
    )
}

export default HomePage;