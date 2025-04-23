import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

const Column = ({ columnId, title, tasks, onEditTask }) => {
  return (
    <div className="column">
      <h3>{title} ({tasks.length})</h3>
      <Droppable droppableId={columnId}>
        {provided => (
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} columnId={columnId} onEditTask={onEditTask} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
