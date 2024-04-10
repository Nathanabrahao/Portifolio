import React from "react";
import NavBarHeader from "../../navbar";
import "../Experience/Experience.css"
import sedecebrace from "../../Images/sede-da-cebrace.jpg"
import { socialSkills } from "../../Components/SocialMedias";


interface Props { }

const Experience = (props: Props) => {
    return (
        <><header className="App-header">
            <NavBarHeader />
        </header>
            <div className="experience__body">
                <div className="experience__info">
                    <div className="icon_skills">{socialSkills.sql.icon}{socialSkills.sap.icon}{socialSkills.sharepoint.icon}{socialSkills.powerAutomate.icon}</div>
                    <h1 className="Title__Company">Development Intern</h1>
                    <div className="Infos">
                        <div>
                            <h3>Company: Cebrace</h3>
                            <p className="Info__job">During the internship process, I worked as an SQL analyst, responsible for creating scripts, performing backups, fixing errors in jobs and schemas, and overall database administration.

                            After the first year, I expanded my responsibilities by also taking on the role of ABAP-SAP and CPI-SAP developer. In this role, I actively participated in SAP development, creating and enhancing environments for users. Additionally, I played a crucial role in creating integrations in CPI, developing API routes, and working with technologies such as REST and Integration Flow.

                            During this phase, I developed significant skills in ABAP-SAP programming, enhancing the efficiency and quality of solutions provided to system users. My involvement in CPI-SAP also provided me with valuable experience in integration creation, enabling efficient communication between different systems.

                            The integration of API routes in CPI, using REST and Integration Flow technologies, stood out as an area where I could apply my technical knowledge to improve system connectivity and interoperability. This experience contributed to developing a broader vision in the field of information technology, allowing me to address complex challenges more effectively.

                            My internship journey provided a solid foundation of technical and practical skills, consolidating my understanding in crucial areas such as database administration, SAP development, and integrations using CPI. I am excited to apply these skills to future challenges and continue to enhance my knowledge in the areas of technology and software development.</p>
                        </div>
                        <div>
                            <img src={sedecebrace} className="sede__cebrace" alt="sede_cebrace" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;