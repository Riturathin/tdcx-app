import React , { useState, useEffect } from 'react';
import '../styles/TasksCompletedOverview.css';
import '../styles/Insights.css';

import { PieChart } from 'react-minimal-pie-chart';

const Insights = ({tasks}) => {
	const [ completedCount , setCompletedCount ] = useState(0)
	const [ pendingCount , setPendingCount ] = useState(0)
	

	useEffect(() => {
		const getInsights = () => {
			const completed = Object.values( tasks ).filter(item => item.status ).length;
			const pending = Object.values( tasks ).filter( item => !item.status ).length;
			setPendingCount(pending);
			setCompletedCount( completed );
		}
		getInsights();
	},[tasks])

	return(
		<div className="total-completed-tasks">
			<div className="insights">
				<PieChart
		  		data={[
				    { title: 'Two', value: pendingCount, color: '#f1f1f1' },
				    { title: 'One', value: completedCount, color: '#007bff' }
				  ]}
				  viewBoxSize={[50]}
				  width={`50%`}
				  expandOnHover
				/>

				<span className='completed-tasks-pointer'></span>
				<span className='completed-tasks-legend'>Completed Tasks</span>
				</div>
		</div>
	)
}

export default Insights;