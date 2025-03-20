import React from "react";
import { useState } from "react";

export default function Tasks({ tasks }) {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [clickedTaskIndex, setClickedTaskIndex] = useState(null);
    function handleTaskClick(index) {
        setClickedTaskIndex(clickedTaskIndex === index ? null : index)
    }
    function handleMarkButton(index) {
        setCompletedTasks([...completedTasks, index]);
        setClickedTaskIndex(null)
    }
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
                    !completedTasks.includes(index) && (
                        <li onClick={() => handleTaskClick(index)} className="task-item" key={index}>
                        <div className="task-item-info">
                            <span className="task-name">{task.name}</span>
                            <div>
                                <span className="task-date">{formatDate(task.date)}</span>
                                <span className="task-time">{formatTime(task.time)}</span>
                            </div>
                        </div>
                        {clickedTaskIndex === index && (
                            <div>
                                <button
                                    onClick={(e) => {
                                            e.stopPropagation();
                                            handleMarkButton(index);
                                    }}
                                    
                                >
                                    Mark As Done
                                </button>
                                <button
                                    onClick={(e) => {
                                            e.stopPropagation();
                                            handleMarkButton(index);
                                    }}
                                    
                                >
                                    Mark As Done
                                </button>
                            </div>
                            )
                        }
                    </li>
                    )
                ))}
            </ul>
        </section>
    );
}