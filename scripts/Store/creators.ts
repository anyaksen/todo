import {User} from 'firebase/app';
import Actions, {Action} from './Actions';
// import {getState} from './index';
import {StateTodo, StateVisibilityFilter} from './State';

/*let nextTodoId = getState().todos.length;

function addTodo( text: string ): Action
{
	return {
		type: Actions.ADD_TODO,
		payload: {
			id: nextTodoId++,
			text,
			completed: false,
		} as StateTodo,
	};
}*/

/*function toggleTodo( id: number ): Action
{
	return {
		type: Actions.TOGGLE_TODO,
		payload: {id},
	};
}*/

function setVisibilityFilter( visibilityFilter: StateVisibilityFilter ): Action
{
	return {
		type: Actions.SET_VISIBILITY_FILTER,
		payload: {visibilityFilter},
	};
}

function setTodos( todos: StateTodo[] ): Action
{
	return {
		type: Actions.SET_TODOS,
		payload: {todos},
	};
}

function setUser( user: User | null ): Action
{
	return {
		type: Actions.SET_USER,
		payload: {user},
	};
}


/**
 * Module.
 */
export {
	// addTodo,
	// toggleTodo,
	setVisibilityFilter,
	setTodos,
	setUser,
};
