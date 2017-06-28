import * as Firebase from 'firebase/app';

function signOut(): void
{
	Firebase.auth().signOut();
}

/**
 * Module.
 */
export {
	signOut as default,
};
