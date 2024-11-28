import React from "react";
import Habit from "./Habit";

const HabitList = ({ habits, onToggleHabit, onDeleteHabit }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onToggleHabit={onToggleHabit}
          onDeleteHabit={onDeleteHabit}
        />
      ))}
    </ul>
  );
};

export default HabitList;
