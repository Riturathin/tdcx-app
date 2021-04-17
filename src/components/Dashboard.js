import React , {useState, useEffect } from 'react';
import TasksCompletedOverview from './TasksCompletedOverview';
import LatestCreatedTasks from './LatestCreatedTasks';
import CreateTaskModal from './CreateTaskModal';
import CreateTaskModalInfo from './CreateTaskModalInfo';
import Insights from './Insights';
import TasksList from './TasksList';
import NewTaskButton from './NewTaskButton';
import EmptyDashboardModal from './EmptyDashboardModal';
import Search from './Search';
import '../styles/Dashboard.css';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
	const [ tasks , setTasks] = useState({});
	const [ isOpen , setisOpen ] = useState(false);
	const [ isEmptyDashboard, setEmptyDashboard ] = useState(false);
	const [ redirect, setRedirect ] = useState(false);

	useEffect( () => {
		async function fetchTasksList() {
			await fetch('http://localhost:4000/tasks' , {
				method: 'GET',
			  headers: {
			    Accept: 'application/json',
			  },
			})
			.then( res => res.json())
				.then( data => { 
						if( data.length > 0 ) setTasks(data)
						else setEmptyDashboard(true);
					})
		}
		
		fetchTasksList();
		
	});

	const isOpenModal = ( val) => {
		setisOpen( val )
		
	}

	const getUpdatedListOnDelete = (tasks) => {
		setTasks(tasks);
		setRedirect(true);
	}

	const tasksLength = tasks.length 
	// const modalDisplayStyle = tasksLength === 0 && !isOpen ? 'none':'block'; 

	return ( 
		<div className='dashboard'>
			<div className='container'>
				{ redirect && <Redirect to='/' /> }
				{ isEmptyDashboard && <EmptyDashboardModal /> }
				{ tasksLength > 0 && !isEmptyDashboard &&
					<div className='row tasks-overview'>
						<div className='col-12 col-md-4 card-wrapper'>
							<TasksCompletedOverview tasks={ tasks } />
						</div>

						<div className='col-12 col-md-4 card-wrapper'>
							<LatestCreatedTasks tasks={ tasks } />
						</div>

						<div className='col-12 col-md-4 card-wrapper'>
							<Insights tasks={ tasks } />
						</div>

						<div className='col-12 task-list-container card-wrapper'>
							<TasksList tasks={ tasks }  onChildDeleteTask={getUpdatedListOnDelete} />
							<div className="search-and-create-wrapper row">
								<div className='col-12 col-md-9 col-12 col-md-9 mt-2 mb-1'>
									<Search tasks={tasks} />
								</div>
								<div  className='col-12 col-md-3 mt-2'>
									<NewTaskButton revealModal={ isOpenModal }  />
								</div>
							</div>
						</div>

					</div>
				}
			</div>

				<div className={ `modal-${ isOpen }`}>
					<CreateTaskModal />
					<CreateTaskModalInfo revealModal={ isOpenModal } />
				</div>

		</div>
	)
}

export default Dashboard;