import React, { useState } from "react";

const AddHabitForm = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit(habitName);
    setHabitName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddHabitForm;
