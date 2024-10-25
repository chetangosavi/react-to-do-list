import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

const TaskList = ({tasks,setData}) => {
  const [isTrue, setIsTrue] = useState(false);
  const [isTaskComplete , setIsTaskComplete] = useState(false);
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
    setIsTaskComplete(!isTaskComplete);
  }

  const handleOnChange = ()=>{
    setIsTaskComplete(!isTaskComplete);
  }
  
  return (
    <div key={tasks.index}>
        <div className="flex justify-between items-center border px-2 py-2 w-[438px]  mt-2 ">

            <div className='text-xl'>{isTaskComplete?<FaCheckSquare onClick={handleOnChange}/>:<MdCheckBoxOutlineBlank onClick={handleOnChange}/>}</div>
            <div>{isTrue?<input className="border px-2 py-1 " onChange={(e)=>setEditTask(e.target.value)} value={editTask}/>:<div
  className={`${
    isTaskComplete ? 'line-through' : 'no-underline'
  }`}
>
  {tasks.element}
</div>}</div>
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