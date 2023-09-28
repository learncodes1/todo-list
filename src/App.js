import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import CreateTaskForm from './components/CreateTaskForm';
import EditTaskForm from './components/EditTaskForm';
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <Router>
      <NextUIProvider>

        <Header />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/edit/:taskId" element={<EditTaskForm />} />
        </Routes>
      </NextUIProvider>

    </Router>

  );
}

export default App;
