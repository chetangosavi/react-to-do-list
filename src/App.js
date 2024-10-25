import { useState } from "react";
import "./App.css";
import { FcTodoList } from "react-icons/fc";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [data, setData] = useState([]);

  console.log(data);
  return (
    // Main container
    <div className="flex flex-col justify-center items-center">
      {/* Heading to do list */}
      <div className="flex items-center justify-center gap-5 mt-4 text-3xl">
        <span>
          <FcTodoList />
        </span>
        <h1 className="font-extrabold">To-Do-List</h1>
      </div>
      {/* component for adding task to list */}
      <AddTask setData={setData} />

      {/* Rendering Tasks as component */}
      {data.map((task, index) => (
        <TaskList
          key={index}
          tasks={{ element: task, index: index }}
          setData={setData}
        />
      ))}
    </div>
  );
}

export default App;
