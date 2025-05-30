import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleEvent,
  deleteTask,
  updateTask,
} from "../features/tasks/tasksSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="max-w-xl mx-auto w-[500px] mt-10">
      <ul className="space-y-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-800 text-white rounded-xl shadow-lg px-6 py-4"
          >
            <input
              type="checkbox"
              checked={!!t.completed}
              onChange={() => dispatch(toggleEvent(t.id))}
              className="w-5 h-5 accent-white"
            />
            {editId === t.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 mx-4 px-2 py-1 rounded text-black"
              />
            ) : (
                <input
                type="text"
                value={t.task}
                readOnly
                className="flex-1 mx-4 px-2 py-1 rounded border-1 border-blue-800 text-black"
              />
            )}

            <button
              onClick={() => dispatch(deleteTask(t.id))}
              className="hover:text-yellow-300 transition text-2xl"
            >
              ❌
            </button>

            {editId === t.id ? (
              <button
                onClick={() => {
                  dispatch(
                    updateTask({ id: editId, task: editText })
                  );
                  setEditId(null);
                  setEditText("");
                }}
                className="text-green-300 hover:text-green-100 text-2xl"
              >
                ✅
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(t.id);
                  setEditText(t.task);
                }}
                className="hover:text-yellow-300 text-2xl ml-2"
              >
                ✏️
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
