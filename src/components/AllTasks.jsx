import React from "react";

export default function Tasks() {
    return (
        <section className="tasks-section">
            <ul className="tasks-list">
                <li className="task-item">
                    <span className="task-name">Start Next.js</span>
                    <span className="task-time">8:00AM</span>
                </li>
                <li className="task-item">
                    <span className="task-name">Clean Room</span>
                    <span className="task-time">5:00AM</span>
                </li>
                <li className="task-item">
                    <span className="task-name">Driving classes in the evening</span>
                    <span className="task-time">5:00PM</span>
                </li>
                <li className="task-item">
                    <span className="task-name">Read a Book</span>
                    <span className="task-time">10:00PM</span>
                </li>
            </ul>
        </section>
    );
}