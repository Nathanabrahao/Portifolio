import React from "react";
import NavBarHeader from "../../navbar";
import { socialSkills } from "../../Components/SocialMedias";
import { motion } from "framer-motion";
import { SiteSlider } from '../../Components/SlideContent';
import { projectsGit } from "../../Components/GithubProjects"
import "../Projects/Projects.css"
import { text } from "stream/consumers";

interface Props { }

const Projects = (props: Props) => {
    const sites = Object.values(projectsGit).map(project => ({
        imgUrl: project.img,
        siteUrl: project.url,
        text: project.text
    }));

    return (
        <div className="App" >
            <header className="App-header">
                <NavBarHeader />
            </header>
            <body className='projects_body' >
                <motion.div whileHover={{ scale: 1.0 }}
                    style={{
                        maxWidth: "500px",
                        width: "100%",
                        aspectRatio: "10 / 9",
                        margin: "0 auto",
                    }}>
                    <SiteSlider sites={sites} />
                </motion.div>
                <div className="icon__skills project_icon">{socialSkills.html.icon}{socialSkills.css.icon}{socialSkills.js.icon}{socialSkills.tss.icon}{socialSkills.react.icon}
                    {socialSkills.angular.icon}{socialSkills.sql.icon}</div>
            </body>
        </div>
    )
}

export default Projects;
