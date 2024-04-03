import React from 'react'
import "../HomePage/HomePage.css"
import NavBarHeader from '../../navbar';

interface Props { }

const HomePage = (props: Props) => {
    return (
        <div className="App">
            <header className="App-header">
                <NavBarHeader />
            </header>
            <body className='App-body'>
                <h1 className='Main-name'>
                    Nathan Abrahão
                </h1>
                <p>
                    I'm front end developer, gamer and reader
                </p>
            </body>
        </div>
    )
}

export default HomePage;