import React from "react"
import { SocialIcon } from "react-social-icons"
import recognize from "../../src/Images/recognize_number.png"
import table from "../../src/Images/table_angular.png"
import flapy from "../../src/Images/Flappy Bird.png"
import "../Pages/Projects/Projects.css"

type Project = {
    name: string;
    url: string;
    label: string;
    img: string;
    text: string;
};

type ProjectsGit = {
    [key: string]: Project;
};

export const projectsGit: ProjectsGit = {
    recognize: {
        name: "recognize_number",
        url: "https://recognize-number-game.vercel.app/",
        label: "recognize",
        img: recognize,
        text: "In this game, you speak a number, and the site responds with the correct number or validates if you are closer to the correct number."
    },
    Tables_Angular: {
        name: "tables_angular",
        url: "https://tables-users.vercel.app/criaUsuario",
        label: "Angular_users",
        img: table,
        text: "This is a 24-hour challenge. I need to create a table where I can read, write, update, and delete users and tasks. I will be completing this challenge using Angular."
    }
};