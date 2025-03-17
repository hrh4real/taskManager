import React from "react";
import { useState } from "react";
import NewTask from "./NewTask";
import Tasks from "./AllTasks";

export default function Main() {
    const [tasks, setTasks] = useState([
        {
            name: "Start Next.js",
            date: "2025-03-17",
            time: "17:00"
        },
        {
            name: "Clean Room",
            date: "2025-03-18",
            time: "15:00"
        },
        {
            name: "Driving classes in the evening",
            date: "2025-03-20",
            time: "8:00"
        },
        {
            name: "Read a Book",
            date: "2025-03-29",
            time: "21:00"
        }
    ]);

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        // sorting tasks by time and date
        updatedTasks.sort((a, b) => {
            // comparing by date
            const dateComparison = new Date(a.date) - new Date(b.date);
            // if matching dates
            if (dateComparison === 0) {
                return a.time.localeCompare(b.time);
            }

            return dateComparison;
        });

        setTasks(updatedTasks)
    }
    return (
        <>
            <NewTask onAddTask={addTask} />
            <Tasks tasks={tasks} />
        </>
    )
}