export type Task = {
  id: string;
  text: string;
  done: boolean;
};

export type taskActions =
  | { type: "ADD_TASK"; payload: { text: string } }
  | { type: "REMOVE_TASK"; payload: { id: string } }
  | { type: "TOGGLE_TASK"; payload: { id: string } };

  
export type TaskInputProps = {
    onAdd: (text: string) => void;
}


export type TaskListProps = {
    tasks: Task[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
}