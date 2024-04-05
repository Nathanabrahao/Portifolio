import React from 'react'
import NavBarHeader from '../../navbar';
import "../AboutMe/AboutMe.css"
import Foto_Nathan from '../../Images/Foto_Nathan.jpg'
import Nathan_Elevador from '../../Images/Nathan_Elevador.jpg'
import Nathan_Praia from '../../Images/Nathan_Praia.jpg'
import Nathan_barba from '../../Images/Nathan_barba.jpg'
import { ImageSlider } from '../../Components/SlideImage';
import { motion } from 'framer-motion';




interface Props { }

const images = [Foto_Nathan, Nathan_Elevador, Nathan_Praia, Nathan_barba]



const AboutMe = (props: Props) => {
    return (
        <><header className="App-header">
            <NavBarHeader />
        </header>
            <body className='About_body'>
                <div><h1 className='About__Title'>
                    Who it's me?
                </h1>
                    <div>
                        <p>
                            My name is Nathan Bittencourt Abdon Abrahão, i have 23 years old and i'm brazilian
                            <br></br>
                            I'm front end developer, gamer, reader and streamer.
                        </p>
                    </div>
                    <div>
                        <p>
                            I'm like so much all games for to <a
                                className="Resident_Evil"
                                href="https://pt.wikipedia.org/wiki/Resident_Evil"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resident Evil ,
                            </a>
                            my favorite book for this moment is
                            <a
                                className="A_Sutil_Arte_de_ligar_o_fodasse"
                                href="https://en.wikipedia.org/wiki/The_Subtle_Art_of_Not_Giving_a_F*ck"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                "The subtle art of not giving a f#ck"
                            </a>
                            <br></br>
                            I'm go to migration my knoledge to Front End knoledge, this because my experience it's about SQL and another things, but this i show you im my
                            <a className='Experience__aboutMe' href='Experience'> Experience</a>
                        </p>
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }}
                    style={{
                        maxWidth: "500px",
                        width: "100%",
                        aspectRatio: "10 / 9",
                        margin: "0 auto"
                    }}>
                    <ImageSlider imageUrls={images} />
                </motion.div>
            </body>
        </>
    )
}

export default AboutMe;