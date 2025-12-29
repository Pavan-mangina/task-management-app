import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../services/api"
import "./EditTask.css" // Import the CSS below

export default function EditTask() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [task, setTask] = useState({ title: "", status: "" })

  useEffect(() => {
    api.get(`/tasks/${id}`).then(res => setTask(res.data))
  }, [id])

  const submit = async e => {
    e.preventDefault()
    await api.put(`/tasks/${id}`, task)
    navigate("/tasks")
  }

  return (
    <div className="edit-container">
      <div className="edit-card">
        <div className="edit-header">
          <h2>Edit Task</h2>
          <p>Update your task details and progress</p>
        </div>

        <form onSubmit={submit} className="edit-form">
          <div className="form-group">
            <label>Task Title</label>
            <input 
              value={task.title} 
              placeholder="Task Title"
              onChange={e => setTask({ ...task, title: e.target.value })} 
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select 
              className={`status-select ${task.status?.toLowerCase().replace(" ", "-")}`}
              value={task.status} 
              onChange={e => setTask({ ...task, status: e.target.value })}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={() => navigate("/tasks")}>
              Cancel
            </button>
            <button type="submit" className="update-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}