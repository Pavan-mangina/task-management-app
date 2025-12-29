import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"
import EditTask from "./pages/EditTask"
import TaskDetails from "./pages/TaskDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
