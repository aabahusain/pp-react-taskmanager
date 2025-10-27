// Theme hook
import { useTheme } from "./context/ThemeContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

// CSS
import "./App.css";

// MUI
import { Container, Typography, Button, Box, CssBaseline } from "@mui/material";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { tasks, dispatch } = useTasks();

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Task Manager
        </Typography>

        <Button variant="outlined" onClick={toggleTheme} sx={{ mb: 2 }}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </Button>

        <TaskInput
          onAdd={(text) => dispatch({ type: "ADD_TASK", payload: { text } })}
        />

        <TaskList
          tasks={tasks}
          onToggle={(id) => dispatch({ type: "TOGGLE_TASK", payload: { id } })}
          onRemove={(id) => dispatch({ type: "REMOVE_TASK", payload: { id } })}
        />
      </Box>
    </Container>
  );
}

export default App;
