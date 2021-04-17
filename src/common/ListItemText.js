import React from 'react';

const ListItemText = ({ task, taskCompleted }) => <span className={ `tasks-list-name task-completed-${ taskCompleted }` }>{ task.name }</span>

export default ListItemText;