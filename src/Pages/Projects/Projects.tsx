import React from "react";
import NavBarHeader from "../../navbar";
import { socialSkills } from "../../Components/SocialMedias";
import { motion } from "framer-motion";
import { SiteSlider } from '../../Components/SlideContent';
import { projectsGit } from "../../Components/GithubProjects"




interface Props { }

const siteImagens = [projectsGit.recognize.img]


const Projects = (props: Props) => {
    return (
        <div className="App" >
            <header className="App-header">
                <NavBarHeader />
            </header>
            <body className='App-body' >
                <motion.div whileHover={{ scale: 1.0 }}
                    style={{
                        maxWidth: "500px",
                        width: "100%",
                        aspectRatio: "10 / 9",
                        margin: "0 auto"
                    }}>
                    <SiteSlider siteUrls={siteImagens} />
                </motion.div>
                <div className="icon__skills">{socialSkills.html.icon}{socialSkills.css.icon}{socialSkills.js.icon}{socialSkills.tss.icon}{socialSkills.react.icon}
                    {socialSkills.angular.icon}{socialSkills.sql.icon}</div>
            </body>
        </div>
    )
}

export default Projects;