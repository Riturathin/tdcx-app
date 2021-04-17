import React, {useState, useEffect} from 'react';
import '../styles/TasksCompletedOverview.css';

const LatestCreatedTasks = (props) => {

	const [ tasks, setSortedTasks ] = useState([]);
	const sortedTasks = props.tasks.sort( (a,b) => new Date(b.created_date) - new Date(a.created_date));

	useEffect(() => {
		setSortedTasks(sortedTasks);
	})

	return (
		<div className='total-completed-tasks'>
			<h4 className='task-completed-overview-heading'>Latest Created Tasks</h4>
			<ul>
				{ tasks.slice(0,3).map( task => {
					return <li className="latest-completed-task" key={ task.name }> { task.name } </li>
				})}
			</ul>
		</div>
	)
}

export default LatestCreatedTasks;