// Importing Hooks
import React, { useRef, useState, useCallback } from "react";

// Importing Types
import type { TaskInputProps } from "../types/task";

// MUI
import { TextField, Button, Box } from "@mui/material";


const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  const handleAdd = useCallback(() => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
      inputRef.current?.focus();
    }
  }, [text, onAdd]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    // <div>
    //   <input
    //     ref={inputRef}
    //     value={text}
    //     onChange={handleChange}
    //     placeholder="Enter a task"
    //   />
    //   <button onClick={handleAdd}>Add Task</button>
    // </div>
      <Box display="flex" gap={2} mb={2}>
      <TextField
        inputRef={inputRef}
        value={text}
        onChange={handleChange}
        placeholder="Enter a task"
        variant="outlined"
        fullWidth
        size="small"
      />
      <Button onClick={handleAdd} variant="contained" color="primary">
        Add
      </Button>
    </Box>
  
  );
};

export default TaskInput;
