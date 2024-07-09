import React from "react"
import { SocialIcon } from "react-social-icons"
import recognize from "../../src/Images/recognize_number.png"
import table from "../../src/Images/table_angular.png"
import webPlayer from "../../src/Images/Web_Player.png"
import Rtodo from "../../src/Images/Todo_React.png"
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
    Web_player: {
        name: "Web Player",
        url: "https://web-player-music.vercel.app/",
        label: "Web_player",
        img: webPlayer,
        text: "This is a web player project, where all the songs is created with Udio(IA creator song), this project show web player active and songs created with my creativity"
    },
    React_TODO: {
        name: "react todo",
        url: "https://todo-react-ts-iota.vercel.app/",
        label: "TODO",
        img: Rtodo,
        text: "In this project, you created, edit and delete, tasks where you subject the name and the difficulty to realized"
    },
//    Tables_Angular: {
//        name: "tables_angular",
//        url: "https://tables-users.vercel.app/criaUsuario",
//        label: "Angular_users",
//        img: table,
//        text: "This is a 24-hour challenge. I need to create a table where I can read, write, update, and delete users and tasks. I will be completing this challenge using Angular."
//    },
    recognize: {
        name: "recognize_number",
        url: "https://recognize-number-game.vercel.app/",
        label: "recognize",
        img: recognize,
        text: "In this game, you speak a number, and the site responds with the correct number or validates if you are closer to the correct number."
    }
};
