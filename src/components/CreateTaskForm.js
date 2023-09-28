import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createTask } from '../reducers/taskSlice';
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const CreateTaskForm = () => {
    const dispatch = useDispatch();
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        dueDate: '',
        status: 'To Do',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            ...taskData,
        };
        dispatch(createTask(newTask));

        setTaskData({
            title: '',
            description: '',
            dueDate: '',
            status: 'To Do',
        });
    };

    return (
        <div>
            <h2 className="text-center">Create Task</h2>
            <div className="flex justify-center w-full">
                <form className="w-full max-w-2xl md:max-w-lg xs:max-w-sm">

                    <Input
                        onChange={handleChange}
                        name="title"
                        type="text"
                        label="title"
                        labelPlacement="inside"
                        value={taskData.title}
                        className="my-3"
                        required
                    />


                    <Textarea
                        onChange={handleChange}
                        value={taskData.description}
                        name="description"
                        label="Description"
                        labelPlacement="inside"
                        placeholder="Enter description"
                        className="my-3"
                    />

                    <Input
                        type="date"
                        name="dueDate"
                        label="Date"
                        labelPlacement="outside-left"
                        value={taskData.dueDate}
                        className="my-3 py-2"
                        onChange={handleChange}
                    />

                    <Select
                        name="status" value={taskData.status} onChange={handleChange}
                        label="Status"
                        placeholder="select status"
                        className="my-3"
                    >
                        <SelectItem key={"To Do"} value="To Do">To Do</SelectItem>
                        <SelectItem key={"In Progress"} value="In Progress">In Progress</SelectItem>
                        <SelectItem key={"Done"} value="Done">Done</SelectItem>
                    </Select>
                </form>
            </div>
            <div className="flex items-center justify-center my-3">
                <Button onClick={handleSubmit} type="submit" color="primary">
                    Create Task
                </Button>
            </div>
        </div>
    );
};

export default CreateTaskForm;
