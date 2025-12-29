import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import api from "../services/api"
import "./TaskDetails.css" // Import the CSS below

export default function TaskDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [task, setTask] = useState(null)

  useEffect(() => {
    api.get(`/tasks/${id}`).then(res => setTask(res.data))
  }, [id])

  const remove = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await api.delete(`/tasks/${id}`)
      navigate("/tasks")
    }
  }

  if (!task) return <div className="loader">Loading...</div>

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-nav">
          <button onClick={() => navigate("/tasks")} className="back-link">
            ← Back to Tasks
          </button>
          <Link to={`/edit/${id}`} className="edit-link">Edit Task</Link>
        </div>

        <header className="details-header">
          <span className={`badge priority-${task.priority.toLowerCase()}`}>
            {task.priority} Priority
          </span>
          <h1>{task.title}</h1>
        </header>

        <div className="details-body">
          <label>Description</label>
          <p className="description-text">
            {task.description || "No description provided for this task."}
          </p>

          <div className="meta-info">
            <div className="info-item">
              <label>Status</label>
              <div className={`status-pill ${task.status.toLowerCase().replace(" ", "-")}`}>
                {task.status}
              </div>
            </div>
            {task.dueDate && (
              <div className="info-item">
                <label>Due Date</label>
                <div className="date-text">{new Date(task.dueDate).toLocaleDateString()}</div>
              </div>
            )}
          </div>
        </div>

        <footer className="details-footer">
          <button className="delete-btn" onClick={remove}>
            Delete Task
          </button>
        </footer>
      </div>
    </div>
  )
}