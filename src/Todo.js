import React from 'react';
import './App.css';

class Todo extends React.Component {
	render() {
		return (
			<div
				className='todo'
				style={{
					textDecoration: this.props.todo.isCompleted ? 'line-through' : '',
				}}
			>
				{this.props.todo.text}
				<div>
					<button onClick={() => this.props.completeTodo(this.props.index)}>
						Complete
					</button>
					<button onClick={() => this.props.removeTodo(this.props.index)}>
						x
					</button>
				</div>
			</div>
		);
	}
}

export default Todo;
