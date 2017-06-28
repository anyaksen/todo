import {Component, h} from 'preact';
import removeTodo from '../data/removeTodo';
/**
 * Component Properties.
 */
interface TodoProps
{
	/** Текст задачи */
	text: string;
	/** Завершена? */
	completed: boolean;
	/** Обработчик переключения задачи */
	onClick(): void;
	/** ID, для проблемы с `{...todo}` */
	// id: number;
	id: string;
	
}

type TodoState = object;

/**
 * Задача.
 */


class Todo extends Component<TodoProps, TodoState>
{
	private str: string;
	public render( {onClick, completed, text, id}: TodoProps): JSX.Element
	{
		this.str = id;
		return (
			<div>
					<li
					onClick={onClick}
					style=
					{
						{
							listStyleType: ('none'),
						}
					}
					class={completed ? 'completed' : undefined}
			>
				<input type="checkbox"
					checked = {(completed ? true : false)}
				/>
				<label 
					style=
					{
						{
							textDecoration: ( completed ? 'line-through' : 'none' ),
						}
					}
				>
				
					{text} 
				</label>
			</li>
				<button type="button"
				onClick={this.onRemClick}
			>
				del
			</button>
			</div>
		);
	}

	private onRemClick = ( event: Event): void =>
	{
		event.preventDefault();
		// dispatch( addTodo( this.input.value ) );
		removeTodo( this.str);
	}
}


/**
 * Module.
 */
export {
	Todo as default,
	TodoProps,
	TodoState,
};
