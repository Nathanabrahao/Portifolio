import React from "react"
import { SocialIcon } from "react-social-icons"
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiSap, SiMicrosoftsharepoint, SiPowerautomate } from "react-icons/si";

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
    }
}
