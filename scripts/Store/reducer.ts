import {User} from 'firebase/app';
import {combineReducers} from 'small-redux';
import Actions, {Action} from './Actions';
import State, {StateTodo, StateVisibilityFilter} from './State';

/**
 * Initial app state.
 */
const initialState: State = {
	todos: [],
	visibilityFilter: 'SHOW_ALL',
	user: null,
};

function todos(
	state: StateTodo[] = initialState.todos,
	action: Action,
): StateTodo[]
{
	switch ( action.type )
	{
		case Actions.SET_TODOS:
			return action.payload.todos;
		
		default:
			return state;
	}
}

function visibilityFilter(
	state: StateVisibilityFilter = initialState.visibilityFilter,
	action: Action,
): StateVisibilityFilter
{
	switch ( action.type )
	{
		case Actions.SET_VISIBILITY_FILTER:
			return action.payload.visibilityFilter;
		
		default:
			return state;
	}
}

function user(
	state: User | null = initialState.user,
	action: Action,
): User | null
{
	switch ( action.type )
	{
		case Actions.SET_USER:
			return action.payload.user;
		
		default:
			return state;
	}
}

const reducer = combineReducers<State, Action>(
	{
		todos,
		visibilityFilter,
		user,
	},
);

/**
 * Module.
 */
export {
	reducer as default,
};
