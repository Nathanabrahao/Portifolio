import React from 'react'
import NavBarHeader from '../../navbar';
import "../AboutMe/AboutMe.css"
import Foto_Nathan from '../../Images/Foto_Nathan.jpg'
import { ImageSlider } from '../../Components/SlideImage';
import { motion } from 'framer-motion';




interface Props { }

const images = [Foto_Nathan]



const AboutMe = (props: Props) => {
    return (
        <><header className="App-header">
            <NavBarHeader />
        </header>
            <body className='About_body'>
                <div><h1 className='About__Title'>
                    About Me
                </h1>
                    <div>
                        <p>
                            My name is Nathan Bittencourt Abdon Abrahão. I am 23 years old and I'm Brazilian.
                            <br></br>
                            I'm a front-end developer, gamer, reader, and streamer.
                        </p>
                    </div>
                    <div>
                        <p>
                            I really enjoy playing all games, especially <a
                                className="Resident_Evil"
                                href="https://pt.wikipedia.org/wiki/Resident_Evil"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resident Evil ,
                            </a>
                            My favorite book at the moment is
                            <a
                                className="A_Sutil_Arte_de_ligar_o_fodasse"
                                href="https://en.wikipedia.org/wiki/The_Subtle_Art_of_Not_Giving_a_F*ck"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                "The subtle art of not giving a f#ck"
                            </a>
                            <br></br>
                            I'm transitioning my knowledge to front-end development because my experience is mainly in SQL and other areas, but I will detail this in my
                            <a className='Experience__aboutMe' href='Experience'> Experience</a>
                        </p>
                    </div>
                </div>
                <motion.img
                    src={Foto_Nathan}
                    alt="Nathan"
                    className="Nathan__picture"
                    whileHover={{}}
                    style={{
                        maxWidth: "500px",
                        width: "100%",
                        aspectRatio: "10 / 9",
                        margin: "0 auto"
                    }}
                />
            </body>
        </>
    )
}

export default AboutMe;