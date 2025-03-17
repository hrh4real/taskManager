import React from "react";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");

    const handleSumbit = (event) => {
        event.preventDefault();
        if (taskName && taskDate && taskTime) {
            // making a task object
            const newTask = {
                name: taskName,
                date: taskDate,
                time: taskTime
            };

            // Passing it to parent component
            onAddTask(newTask);

            // Reset form
            setTaskName("");
            setTaskDate("");
            setTaskTime("");
            setIsFormOpen(false);
        }
    };
    return (
        <section className="new-task-section">
            <button
                className="new-task-button"
                onClick={() => setIsFormOpen(!isFormOpen)}
            >
                <span className="plus-icon">+</span>
                <span className="new-task-text">Add a new Task</span>
            </button>
            {isFormOpen && (
                <div className="task-form-container">
                    <form onSubmit={handleSumbit} className="task-form">
                        <div className="form-group">
                            <label htmlFor="task-name">Task Description</label>
                            <textarea
                                id="task-name"
                                value={taskName}
                                onChange={(event) => setTaskName(event.target.value)}
                                placeholder="what's urgent ?"
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="task-date">Date</label>
                                <input
                                    type="date"
                                    id="task-date"
                                    value={taskDate}
                                    onChange={(event) => setTaskDate(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="task-time">Time</label>
                                <input
                                    type="time"
                                    id="task-time"
                                    value={taskTime}
                                    onChange={(event) => setTaskTime(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="add-task-submit">
                            Add New Task
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
}