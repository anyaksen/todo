import {h} from 'preact';

/**
 * Component Properties.
 */
interface LinkProps
{
	active: boolean;
	children?: JSX.Element[];
	onClick( event: Event ): void;
}

/**
 * Ссылка-переключатель.
 */
function Link(
	{active, children, onClick}: LinkProps,
): JSX.Element
{
	if ( active )
	{
		return <button type="button" class="active"> {children}</button>;
	}
	
	return (
		<button type="button" class="non-active"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

/**
 * Module.
 */
export {
	Link as default,
	LinkProps,
};
