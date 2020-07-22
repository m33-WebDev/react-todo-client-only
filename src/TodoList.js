import React from 'react';
import Todo from './Todo';
import './App.css';

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			todos: [
				{ text: 'Learn about React', isCompleted: false },
				{ text: 'Meet friend for lunch', isCompleted: false },
				{ text: 'Build really cool todo app', isCompleted: false },
			],
		};

		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	onChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		var list = this.state.todos;
		list.push({ text: this.state.value, isCompleted: false });
		this.setState({ todos: list, value: '' });
	}

	completeTodo(index) {
		const newTodos = [...this.state.todos];
		newTodos[index].isCompleted = true;
		this.setState({ todos: newTodos });
	}

	removeTodo(index) {
		let newTodos = [...this.state.todos];
		newTodos.splice(index, 1);
		this.setState({ todos: newTodos });
	}

	render() {
		return (
			<>
				<div className='todo-list'>
					{this.state.todos.map((todo, i) => (
						<Todo
							key={todo.text}
							index={i}
							todo={todo}
							completeTodo={this.completeTodo}
							removeTodo={this.removeTodo}
						/>
					))}
					<form onSubmit={this.handleSubmit}>
						<input
							className='todo-add-box'
							type='text'
							value={this.state.value}
							onChange={this.onChange}
						/>
					</form>
				</div>
			</>
		);
	}
}

export default TodoList;
