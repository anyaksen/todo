import {database} from 'firebase/app';
import {getState} from '../Store/index';

function removeTodo( id: string ): void
{
	const stateUser = getState().user;
	if (stateUser)
	{
		const todoRef =  database().ref(`/users/${stateUser.uid}/todos/${id}`);
		todoRef.remove();
	}
}

/**
 * Module.
 */
export {
	removeTodo as default,
};
