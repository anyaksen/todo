import * as Firebase from 'firebase/app';
import {StateTodo} from '../Store/State';
import {setTodos, setUser} from '../Store/creators';
import {dispatch} from '../Store/index';
import getTodosRef from './getTodosRef';

function subscribe(): void
{
	Firebase.auth().onAuthStateChanged(
		( user: Firebase.User | null ) =>
		{
			if ( user )
			{
				subscribeToTodos( user.uid );
			}
			else
			{
				unsubscribeFromTodos();
			}
			
			dispatch( setUser( user ) );
		}
	);
}

function subscribeToTodos( uid: string ): void
{
	const todosRef = getTodosRef( uid );
	
	todosRef.on(
		'value',
		( snapshot ) =>
		{
			const value = (
				snapshot
				? snapshot.val()
				: null
			);
			
			if ( !value )
			{
				dispatch( setTodos( [] ) );
				return;
			}
			
			const keys = Object.keys( value );
			const todos: StateTodo[] = [];
			
			for ( const key of keys )
			{
				const {text, completed} = value[key] as StateTodo;
				
				todos.push(
					{
						id: key,
						text,
						completed,
					},
				);
			}
			
			dispatch( setTodos( todos ) );
		},
	);
}

function unsubscribeFromTodos(): void
{
	const todosRef = getTodosRef();
	
	todosRef && todosRef.off();
}

/**
 * Module.
 */
export {
	subscribe as default,
};
