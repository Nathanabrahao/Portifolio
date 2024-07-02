import React from "react"
import { SocialIcon } from "react-social-icons"
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiSap, SiMicrosoftsharepoint, SiPowerautomate, SiHtml5, SiTypescript, SiAngular } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaNode, FaJava, FaPython } from "react-icons/fa";

export const socialMedias = {
    github: {
        name: "Nathanabrahao",
        url: "https://github.com/Nathanabrahao",
        label: "Github",
        icon: <SocialIcon url="https://github.com/Nathanabrahao" />,
    },
    linkedin: {
        name: "Nathan Abrahão",
        url: "https://www.linkedin.com/in/nathan-abrah%C3%A3o-981209176/",
        label: "Linkedin",
        icon: <SocialIcon url="https://www.linkedin.com/in/nathan-abrah%C3%A3o-981209176/" />
    },
    gmail: {
        name: "nathanntc6@gmail.com",
        url: "mailto:nathanntc6@gmail.com",
        label: "Gmail",
        icon: <SocialIcon url="mailto:nathanntc6@gmail.com" />
    }
};


export const socialSkills = {
    sql: {
        name: "SQL",
        icon: <AiOutlineConsoleSql />
    },
    sap: {
        name: "Sap - Abap",
        icon: <SiSap />
    },
    sharepoint: {
        name: "sharepoint",
        icon: <SiMicrosoftsharepoint />
    },
    powerAutomate: {
        name:"powerAutomate",
        icon: <SiPowerautomate />
    },
    js: {
        name:"javascript",
        icon: <IoLogoJavascript />
    },
    html: {
        name:"html",
        icon: <SiHtml5 />
    },
    css: {
        name:"css",
        icon: <IoLogoCss3 /> 
    },
    tss: {
        name:"typscript",
        icon: <SiTypescript />
    },
    react: {
        name:"react",
        icon: <FaReact />
    },
    angular: {
        name:"angular",
        icon: <SiAngular />
    },
    nodejs: {
        name:"nodejs",
        icon: <FaNode />
    },
    java: {
        name:"java",
        icon: <FaJava />
    },
    python: {
        name:"python",
        icon: <FaPython />
    }
}
