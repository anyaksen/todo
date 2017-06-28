import {h} from 'preact';
// import {toggleTodo} from '../Store/creators';
import toggleTodo from '../data/toggleTodo';
import {/*dispatch,*/ SubscribedComponent} from '../Store/index';
import State, {StateTodo, StateVisibilityFilter} from '../Store/State';
import Todo from './Todo';

/**
 * Component Properties.
 */
type TodoListProps = object;

/**
 * Component State.
 */
interface TodoListState
{
	todos: StateTodo[];
	visibilityFilter: StateVisibilityFilter;
}

/**
 * Список задач.
 */
class TodoList extends SubscribedComponent<State, TodoListProps, TodoListState>
{
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const todos = this.getVisibileTodos();
		
		return (
			<ul>
				{
					todos.map(
						( todo: StateTodo ) => (
							<Todo
								key={todo.id}
								{...todo}
								onClick={() => this.onTodoClick( todo.id )}
							/>
						),
					)
				}
			</ul>
		);
	}
	
	protected storeStateChanged( {todos, visibilityFilter}: State ): void
	{
		if (
			( todos === this.state.todos )
			&& ( visibilityFilter === this.state.visibilityFilter )
		)
		{
			return;
		}
		
		this.setState( {todos, visibilityFilter} );
	}
	
	private onTodoClick = ( id: string ): void =>
	{
		// dispatch( toggleTodo( id ) );
		toggleTodo( id );
	}
	
	private getVisibileTodos(): StateTodo[]
	{
		const {todos, visibilityFilter} = this.state;
		
		switch ( visibilityFilter )
		{
			case 'SHOW_ALL':
			default:
				return todos;
			
			case 'SHOW_COMPLETED':
				return todos.filter(
					( todo: StateTodo ) => todo.completed,
				);
			
			case 'SHOW_ACTIVE':
				return todos.filter(
					( todo: StateTodo ) => !todo.completed,
				);
		}
	}
}

/**
 * Module.
 */
export {
	TodoList as default,
	TodoListProps,
	TodoListState,
};
