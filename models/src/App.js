import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Agile Task Board 🚀</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {['To Do', 'Doing', 'Done'].map(status => (
          <div key={status} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <h3>{status}</h3>
            {/* Task mapping will go here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
