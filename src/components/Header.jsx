import React from "react";
import taskLogo from "./images/task-manager-logo.png";
import altTaskLogo from "./images/alt-logo-task-manager.png"
import barLogo from "./images/bar-logo.png"

export default function Header() {
    return (
        <header>
            <div className="heading-div">
                <img src={altTaskLogo} alt="task-manager-logo" />
                <h1>TickIt</h1>
            </div>
            <div className="bar-div">
                <button>
                    <img src={barLogo} alt="bar-logo" />
                </button>
                <div className="dropdown-menu">
                    <ul>
                        <li>Profile</li>
                        <li>All Tasks</li>
                        <li>Create New Task</li>
                        <li>Settings</li>
                        <li>Log Out</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}