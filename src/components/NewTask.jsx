import React from "react";

export default function NewTask() {
    return (
        <section className="new-task-section">
            <button className="new-task-button">
                <span className="plus-icon">+</span>
                <span className="new-task-text">Add a new Task</span>
            </button>
        </section>
    );
}