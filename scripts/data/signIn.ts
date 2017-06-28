import * as Firebase from 'firebase/app';

function signIn(): void
{
	const auth = Firebase.auth;
	const authProvider = new auth.GoogleAuthProvider();
	
	auth().signInWithRedirect( authProvider );
}

/**
 * Module.
 */
export {
	signIn as default,
};
