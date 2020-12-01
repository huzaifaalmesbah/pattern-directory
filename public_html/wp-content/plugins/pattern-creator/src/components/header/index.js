/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';

/**
 * Edit-Post dependencies
 */
import HeaderToolbar from '@wordpress/edit-post/build/components/header/header-toolbar';

/**
 * Internal dependencies
 */
import './style.css';

export default function Header( {
	isSidebarOpened,
	openSidebar,
	closeSidebar,
	isPublishSidebarOpened,
	openPublishSidebar,
	closePublishSidebar,
} ) {
	return (
		<div className="block-pattern-creator__header">
			<div className="edit-post-header__toolbar">
				<HeaderToolbar />
			</div>
			<div className="block-pattern-creator__header-actions">
				<Button>Preview</Button>
				<Button
					isPrimary
					isPressed={ isPublishSidebarOpened }
					onMouseDown={ ( event ) => {
						event.preventDefault();
					} }
					onClick={ () => {
						if ( isPublishSidebarOpened ) {
							closePublishSidebar();
						} else {
							openPublishSidebar();
						}
					} }
				>
					Submit
				</Button>
				<Button
					isPressed={ isSidebarOpened }
					onMouseDown={ ( event ) => {
						event.preventDefault();
					} }
					onClick={ () => {
						if ( isSidebarOpened ) {
							closeSidebar();
						} else {
							openSidebar();
						}
					} }
					icon={ cog }
					label="Open Inspector"
				/>
			</div>
		</div>
	);
}
