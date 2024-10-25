import React, { useState } from 'react'

const AddTask = ({setData}) => {
  
  const [newTask, setNewTask] = useState("");

  const addtask = () => {
    if (newTask === "") {
      return;
    }
    setData((prev)=>[...prev, newTask]);
    setNewTask("");
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center mb-5">
      
      <div className="mt-8 flex items-center">
        
        <input
          onChange={(e) => setNewTask(e.target.value)}
          className="border px-2 py-3 w-80 text-lg"
          name="task"
          value={newTask}
          placeholder="What’s next on your list?"
        />
        <button
          onClick={addtask}
          className="bg-green-400 px-2 py-3 w-28 text-lg text-white ml-2"
        >
          Add
        </button>
      </div>
      </div>
    </>
  )
}

export default AddTask