import getTodosRef from './getTodosRef';

function toggleTodo( id: string ): void
{
	const todosRef = getTodosRef();
	
	if ( !todosRef )
	{
		return;
	}
	
	const todoRef = todosRef.child( id );
	
	todoRef.child( 'completed' ).transaction(
		( value: boolean ) => !value,
	);
}

/**
 * Module.
 */
export {
	toggleTodo as default,
};
