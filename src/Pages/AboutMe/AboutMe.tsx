import React from 'react'
import NavBarHeader from '../../navbar';

interface Props { }

const AboutMe = (props: Props) => {
    return (
        <><header className="App-header">
            <NavBarHeader />
        </header>
        <div>AboutMe</div></>
    )
}

export default AboutMe;