import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import "./TaskList.css"; // Import the CSS below

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="list-container">
      <div className="list-header">
        <div>
          <h1>Your Tasks</h1>
          <p>{tasks.length} tasks remaining</p>
        </div>
        <Link to="/add" className="add-task-btn">+ New Task</Link>
      </div>

      <div className="task-grid">
        {tasks.map((t) => (
          <div key={t._id} className="task-item-card">
            <div className="task-content">
              <span className={`status-tag ${t.status?.toLowerCase().replace(" ", "-")}`}>
                {t.status}
              </span>
              <h3>{t.title}</h3>
              <p className="task-priority">Priority: <strong>{t.priority}</strong></p>
            </div>
            
            <div className="task-actions">
              <Link title="View Details" to={`/task/${t._id}`} className="action-link view">
                👁️
              </Link>
              <Link title="Edit Task" to={`/edit/${t._id}`} className="action-link edit">
                ✏️
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {tasks.length === 0 && (
        <div className="empty-state">
          <p>No tasks found. Start by adding one!</p>
        </div>
      )}
    </div>
  );
}