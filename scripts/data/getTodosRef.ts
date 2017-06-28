import {database} from 'firebase/app';
import {getState} from '../Store/index';

function getTodosRef( uid: string ): database.Reference;
function getTodosRef(): database.Reference | null;
function getTodosRef( uid?: string ): database.Reference | null
{
	if ( !uid )
	{
		const stateUser = getState().user;
		
		if ( !stateUser )
		{
			return null;
		}
		
		uid = stateUser.uid;
	}
	
	
	return database().ref( `/users/${uid}/todos` );
}

/**
 * Module.
 */
export {
	getTodosRef as default,
};
