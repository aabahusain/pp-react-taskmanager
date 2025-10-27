// import Hooks
import React, { useMemo } from "react";

// import Types
import type { TaskListProps, Task } from "../types/task";

// MUI & Icons
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onRemove }) => {
  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => Number(a.done) - Number(b.done));
  }, [tasks]);

  return (

       <List>
      {sortedTasks.map((task: Task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => onRemove(task.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            edge="start"
            checked={task.done}
            onChange={() => onToggle(task.id)}
          />
          <ListItemText
            primary={task.text}
            style={{
              textDecoration: task.done ? "line-through" : "none",
              opacity: task.done ? 0.5 : 1,
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
