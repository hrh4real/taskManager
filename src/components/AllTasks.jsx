import React from "react";

export default function Tasks({ tasks }) {
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes}${period}`;
    };
    return (
        <section className="tasks-section">
            <ul className="tasks-list">
                {tasks.map((task, index) => (
                    <li className="task-item" key={index}>
                        <span className="task-name">{task.name}</span>
                        <div>
                            <span className="task-date">{formatDate(task.date)}</span>
                            <span className="task-time">{formatTime(task.time)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}