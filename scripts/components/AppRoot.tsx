import {h} from 'preact';
import AddTodo from './AddTodo';
import Auth from './Auth';
import Footer from './Footer';
import TodoList from './TodoList';

function TodoApp(): JSX.Element
{
	return (
		<section>
			<h1>Todo List</h1>
			<Auth />
			<AddTodo />
			<TodoList />
			<Footer />
		</section>
	);
}

/**
 * Корень приложения.
 */
// tslint:disable-next-line:variable-name
const AppRoot = <TodoApp />;

/**
 * Module.
 */
export {
	AppRoot as default,
	TodoApp,
};
