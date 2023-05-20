import cn from 'classnames';

import './FormControl.scss';

export const FormControl = ({ className, label, id, as: Component, name, ...other }) => (
	<div className={cn('control-form', className)}>
		<label className='control-form__label' htmlFor={id}>{label}</label>
		<div className='control-form__field'>
			<Component id={id} {...other}/>
			{/* <Controller control={control} rules={rules} name={name} defaultValue='' render={({field}) => (
			)}/> */}
			{/* <ErrorMessage 
			errors={errors}
			name={name} 
			as={<span className='control-form__error'/>}
			/> */}
		</div>
	</div>
);