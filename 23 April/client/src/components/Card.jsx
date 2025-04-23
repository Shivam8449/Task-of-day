import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ task, index, columnId, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (newTitle.trim() !== task.title) {
      onEditTask(columnId, task.id, newTitle);
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={handleDoubleClick}
        >
          {isEditing ? (
            <input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onBlur={handleBlur}
              autoFocus
            />
          ) : (
            <span>{task.title}</span>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
