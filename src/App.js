import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import CreateTaskForm from './components/CreateTaskForm';
import EditTaskForm from './components/EditTaskForm';
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react"; 
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <NextUIProvider>
        <Header />
        <div className="container">
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/edit/:taskId" element={<EditTaskForm />} />       
         </Routes>
        </div>
      </NextUIProvider>
    </Router>

  );
}

export default App;
