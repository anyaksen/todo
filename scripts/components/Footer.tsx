import {h} from 'preact';
import {setVisibilityFilter} from '../Store/creators';
import {dispatch, SubscribedComponent} from '../Store/index';
import State, {StateVisibilityFilter} from '../Store/State';
import Link from './Link';

/**
 * Component Properties.
 */
type FooterProps = object;

/**
 * Component State.
 */
interface FooterState
{
	visibilityFilter: StateVisibilityFilter;
}

/**
 * Подвал приложения.
 */
class Footer extends SubscribedComponent<State, FooterProps, FooterState>
{
	/**
	 * Render component.
	 */
	public render(
		_props: FooterProps,
		{visibilityFilter}: FooterState,
	): JSX.Element
	{
		return (
			<footer>
				<Link
					active={visibilityFilter === 'SHOW_ALL'}
					onClick={this.onAllClick}
				>
					All
				</Link>
				<Link
					active={visibilityFilter === 'SHOW_ACTIVE'}
					onClick={this.onActiveClick}
				>
					Active
				</Link>
				<Link
					active={visibilityFilter === 'SHOW_COMPLETED'}
					onClick={this.onCompletedClick}
				>
					Compiled
				</Link>
			</footer>
		);
	}
	
	protected storeStateChanged( {visibilityFilter}: State ): void
	{
		if ( visibilityFilter === this.state.visibilityFilter )
		{
			return;
		}
		
		this.setState( {visibilityFilter} );
	}
	
	private onAllClick = ( event: Event ): void =>
	{
		event.preventDefault();
		dispatch( setVisibilityFilter( 'SHOW_ALL' ) );
	}
	
	private onActiveClick = ( event: Event ): void =>
	{
		event.preventDefault();
		dispatch( setVisibilityFilter( 'SHOW_ACTIVE' ) );
	}
	
	private onCompletedClick = ( event: Event ): void =>
	{
		event.preventDefault();
		dispatch( setVisibilityFilter( 'SHOW_COMPLETED' ) );
	}
}

/**
 * Module.
 */
export {
	Footer as default,
	FooterProps,
	FooterState,
};
