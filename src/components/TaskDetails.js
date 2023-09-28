import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditTaskForm from "./EditTaskForm";

const TaskDetails = () => {
    const { taskId } = useParams();
    const task = useSelector((state) =>
        state.tasks.find((task) => task.id === taskId)
    );

    return (
        <div>
            <h2>Task Details</h2>
            {task ? (
                <div>
                    <h3>{task.title}</h3>
                    <p>Description: {task.description}</p>
                    <p>Due Date: {task.dueDate}</p>
                    <p>Status: {task.status}</p>
                    <EditTaskForm/>
                </div>

            ) : (
                <p>Task not found.</p>
            )}
        </div>
    );
};

export default TaskDetails;
