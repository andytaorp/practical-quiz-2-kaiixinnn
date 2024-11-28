import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
    if (!name.trim()) return; // Prevent adding empty habits
    setHabits([...habits, { id: Date.now(), name, completed: false }]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onToggleHabit={toggleHabit} onDeleteHabit={deleteHabit} />
    </div>
  );
};

export default App;
