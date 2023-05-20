import cn from 'classnames';

import './Input.scss';

const DEFAULT_TYPE = 'text';
const DEFAULT_AUTOCOMPLETE = 'off';

export const Input = ({type = DEFAULT_TYPE, autoComplete=DEFAULT_AUTOCOMPLETE, className, ...other}) => (
	<input 
		{...other} 
		type={type} 
		autoComplete={autoComplete} 
		className={cn('input', className)}
	/>
);