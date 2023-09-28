import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EditTaskForm from "./EditTaskForm";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const TaskDetails = () => {
    const { taskId } = useParams();    
    const task = useSelector((state) =>
        state.tasks.find((task) => task.id === taskId)
    );

    return (
        <div>
            <h3>Task Details</h3>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Due Date</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>              
                    {task ? (
                        <TableRow key={task.id}>
                            <TableCell><Link to={`/task/${task.id}`}>
                                <span className="cursor-pointer text-blue-600">⚪ {task.title}</span>
                            </Link></TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell>{task.status}</TableCell>
                        </TableRow>
                    ) : (
                        <p className="text-center">Task not found.</p>
                    )}

                </TableBody>
            </Table>            
            <div className="py-7">
            <EditTaskForm />
            </div>
        </div>
    );
};

export default TaskDetails;
