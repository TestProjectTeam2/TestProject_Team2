import cn from 'classnames';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import './FormControl.scss';

export const FormControl = ({ className, label, id, as: Component, control, errors, name, rules, ...other }) => (
	<div className={cn('control-form', className)}>
		<label className='control-form__label' htmlFor={id}>{label}</label>
		<div className='control-form__field'>
		<Controller control={control} rules={rules} name={name} defaultValue='' render={({field}) => (
				<Component id={id} {...field } {...other}/>
			)}/>
			<ErrorMessage 
			errors={errors}
			name={name} 
			as={<span className='control-form__error'/>}
			/>
		</div>
	</div>
);