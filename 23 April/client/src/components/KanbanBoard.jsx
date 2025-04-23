import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const initialData = {
  todo: [],
  inProgress: [],
  done: [],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanban-tasks');
    return saved ? JSON.parse(saved) : initialData;
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newId = Date.now().toString();
    const newCard = { id: newId, title: newTask };
    setTasks(prev => ({
      ...prev,
      todo: [...prev.todo, newCard],
    }));
    setNewTask('');
  };

  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceCol = tasks[source.droppableId];
    const destCol = tasks[destination.droppableId];
    const [movedTask] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, movedTask);

    setTasks(prev => ({
      ...prev,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    }));
  };

  const handleEditTask = (columnId, taskId, newTitle) => {
    setTasks(prev => ({
      ...prev,
      [columnId]: prev[columnId].map(task => 
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    }));
  };

  return (
    <div className="board">
      <div className="add-task">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {['todo', 'inProgress', 'done'].map(col => (
          <Column
            key={col}
            columnId={col}
            title={col === 'todo' ? 'Todo' : col === 'inProgress' ? 'In Progress' : 'Done'}
            tasks={tasks[col]}
            onEditTask={handleEditTask}
          />
        ))}
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
