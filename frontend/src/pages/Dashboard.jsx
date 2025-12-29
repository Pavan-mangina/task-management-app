import { Link } from "react-router-dom"
import "./Dashboard.css" // Import the CSS below

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>Task Management</h1>
        <p>Welcome back! What would you like to do today?</p>
      </header>

      <div className="menu-grid">
        <Link to="/add" className="menu-card">
          <div className="icon-circle add-icon">+</div>
          <h3>Add Task</h3>
          <p>Create a new task to stay organized.</p>
        </Link>

        <Link to="/tasks" className="menu-card">
          <div className="icon-circle view-icon">📋</div>
          <h3>View Tasks</h3>
          <p>Manage and track your existing tasks.</p>
        </Link>
      </div>
    </div>
  )
}