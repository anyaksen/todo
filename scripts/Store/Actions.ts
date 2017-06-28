import {Action as BaseAction} from 'small-redux';

/**
 * Возможные действия.
 */
// tslint:disable-next-line:variable-name
const Actions = {
	// ADD_TODO: 'ADD_TODO' as 'ADD_TODO',
	// TOGGLE_TODO: 'TOGGLE_TODO' as 'TOGGLE_TODO',
	SET_TODOS: 'SET_TODOS' as 'SET_TODOS',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER' as 'SET_VISIBILITY_FILTER',
	SET_USER: 'SET_USER' as 'SET_USER',
};

/**
 * Объект действия.
 */
interface Action extends BaseAction
{
	/** Тип */
	type: keyof typeof Actions;
	/** Данные */
	payload: any;
}

/**
 * Module.
 */
export {
	Actions as default,
	Action,
};
