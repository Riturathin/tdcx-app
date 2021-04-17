import React from 'react';
import '../styles/TasksCompletedOverview.css';

const TasksCompletedOverview = (props) => {
	const completedTasks = props.tasks.filter( a=>a.status ).length
	return(
		<div className='total-completed-tasks'>
			<h4 className='task-completed-overview-heading'>Task Completed</h4>
			<span className='task-completed-figure'>{ completedTasks }</span>
			<span className='task-completed-figure-total'>/{ props.tasks.length}</span>
		</div>
	)
}

export default TasksCompletedOverview;