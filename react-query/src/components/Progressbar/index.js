import './Progressbar.css';
import {forwardRef} from 'react';

const Progressbar = forwardRef((props, ref) => {
	return (
		<div
			ref={ref}
			role="progressbar"
			aria-label="Please wait"
			className="progressbar"
			{...props}
		>
			Please wait...
		</div>
	);
});

Progressbar.displayName = 'Progressbar';

export default Progressbar;
