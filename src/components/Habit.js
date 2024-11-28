import React from "react";

const Habit = ({ habit, onToggleHabit, onDeleteHabit }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggleHabit(habit.id)}
        />
        <span
          style={{
            textDecoration: habit.completed ? "line-through" : "none",
          }}
        >
          {habit.name}
        </span>
      </label>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
};

export default Habit;
