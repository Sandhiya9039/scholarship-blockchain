import React, { useEffect, useState } from "react";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // For now, this is a placeholder
    setStudents([
      { name: "Alice", score: 85, approved: true },
      { name: "Bob", score: 60, approved: false }
    ]);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table style={{ width: "100%", color: "#00ff00", border: "1px solid #00ff00" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, idx) => (
            <tr key={idx}>
              <td>{s.name}</td>
              <td>{s.score}</td>
              <td>{s.approved ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;