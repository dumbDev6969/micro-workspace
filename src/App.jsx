import { useState } from 'react'
import { Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import TaskPage from "./pages/TaskPage"
import Nav from "./components/Nav"
import { Button } from '@heroui/react';

function App() {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Task page", path: "/task" },
  ];

  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> }/>
        <Route path="/task" element={ <TaskPage /> } />
      </Routes>

      {/* Navigation */}
      <Nav links={navItems} />
      
      
    </div>
  )
  

}

export default App
