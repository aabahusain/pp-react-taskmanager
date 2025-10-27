import { useReducer, useEffect } from "react";

import type { Task, taskActions } from "../types/task";

function generateTaskID(): string {
  return crypto.randomUUID();
}

function taskReducer(state: Task[], action: taskActions): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: generateTaskID(), text: action.payload.text, done: false },
      ];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
}

export function useTasks() {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])


  return { tasks, dispatch };
}
