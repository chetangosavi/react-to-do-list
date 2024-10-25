import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

const TaskList = ({tasks,setData}) => {
  const [isTrue, setIsTrue] = useState(false);
  const [editTask, setEditTask] = useState(tasks.element);

  const handleDelete = ()=>{
    setData((prev)=>prev.filter((elm,idx)=>tasks.index!==idx))
  }

  const handleUpdate = ()=>{
    setData((prev)=>prev.map((elm,idx)=>{
        if(idx===tasks.index){
          return editTask;
        }
        return elm;
    }))
    setIsTrue(!isTrue);
  }
  
  return (
    <div key={tasks.index} className="my-2 ">
        <div className="flex justify-between border px-3 py-2 w-[438px]  mt-2 ">
            <div>{isTrue?<input onChange={(e)=>setEditTask(e.target.value)} value={editTask}/>:tasks.element}</div>
            <div className="flex gap-2 text-lg">
            <button className="border p-1">
                  {isTrue?<RxCross2 onClick={()=>setIsTrue(!isTrue)} />:<CiEdit onClick={()=>setIsTrue(!isTrue)}/>}
                </button>
                <button className="border p-1 bg-red-700 text-white">
                  {isTrue?<FaCheck onClick={handleUpdate}/>:<MdDeleteOutline onClick={handleDelete}/>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default TaskList