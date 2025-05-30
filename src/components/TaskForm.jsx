import { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice.js";
import TaskList from "./TaskList.jsx";
import { logOut } from "../features/auth/authSlice.js";

const TaskFrom = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    } else {
      const newTask = {
        id: Date.now(),
        task: task.trim(),
        completed: false,
      };
      dispatch(addTask(newTask));
      setTask("");
    }
  };

  return (
    <>
      <div className="flex items-center flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
        <h2 className="text-4xl pb-10 font-semibold block text-white text-center mt-8">
          Add a New Task
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl flex items-center gap-4"
        >
          <button
           onClick={() => dispatch(logOut())}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            LogOut
          </button>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </form>
        {<TaskList />}
      </div>
    </>
  );
};

export default TaskFrom;
