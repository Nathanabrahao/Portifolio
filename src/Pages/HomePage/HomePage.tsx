import React from 'react'
import "../HomePage/HomePage.css"
import NavBarHeader from '../../navbar';
import { socialSkills } from '../../Components/SocialMedias';

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
                    I'm front end developer, gamer and reader
                </p>
                <div className="icon__skills">{socialSkills.html.icon}{socialSkills.css.icon}{socialSkills.js.icon}{socialSkills.tss.icon}{socialSkills.react.icon}
                {socialSkills.angular.icon}{socialSkills.sql.icon}</div>
            </body>
        </div>
    )
}

export default HomePage;