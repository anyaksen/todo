import {Component, h} from 'preact';
// import {addTodo} from '../Store/creators';
// import {dispatch} from '../Store/index';
import addTodo from '../data/addTodo';

/**
 * Component Properties.
 */
interface AddTodoProps
{
	// Запрещаем любые ключи (только пустой объект)
	[key: string]: void;
}

/**
 * Component State.
 */
type AddTodoState = object;

/**
 * Форма добавления задачи.
 */
class AddTodo extends Component<AddTodoProps, AddTodoState>
{
	/**
	 * Элемент поля ввода.
	 */
	private input: HTMLInputElement;
	
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		return (
			<form>
				<input
					ref={this.refInput}
				/>
				<button
					type="button"
					onClick={this.onClick}
				>
					Add
				</button>
			</form>
		);
	}
	
	/**
	 * Сохраняет ссылку на элемент поля ввода.
	 */
	private refInput = ( element: HTMLInputElement ): void =>
	{
		this.input = element;
	}
	
	/**
	 * При нажатии на кнопку.
	 */
	private onClick = (): void =>
	{
		// dispatch( addTodo( this.input.value ) );
		addTodo( this.input.value );
		this.input.value = '';
	}
}

/**
 * Module.
 */
export {
	AddTodo as default,
	AddTodoProps,
	AddTodoState,
};
