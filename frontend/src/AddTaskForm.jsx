import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    onAdd(taskText.trim());
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-3">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter new task..."
        className="flex-grow border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition"
      >
        Add
      </button>
    </form>
  );
}
