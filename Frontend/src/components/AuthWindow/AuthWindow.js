import { useState } from 'react';
import {Button } from 'react-bootstrap';

import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';

import './AuthWindow.scss';

const LOG_IN_MODE = 'log-in';
const REGISTER_MODE = 'register';

const LOG_IN_FIELDS = [
	{
		as: Input,
		placeholder: "E-mail",
		type: "email",
		name: "email",
		label: "E-mail", 
		id: "email",
		// rules: {
		// 	required: "This is a required field",
		// 	pattern: {
		// 		value: EMAIL_PATTERN,
		// 		message: "Error!!!!!!!!!!"
		// 	}
		// }
	},
	{
		as: Input,
		placeholder: "Password",
		type: "password",
		name: "password",
		label: "Password", 
		id: "password",
		// rules: {
		// 	required: "This is a required field"
		// }
	}
]

export const AuthWindow = () => {

	const [mode, setMode] = useState(LOG_IN_MODE);

	const isLogInMode = mode === LOG_IN_MODE;

	const handleSwitchMode = () => {
		setMode(prevMode => (prevMode === LOG_IN_MODE ? REGISTER_MODE : LOG_IN_MODE));
	};

	const REGISTER_FIELDS = [
		{
			as: Input,
			placeholder: "First name",
			type: "text",
			name: "firstName",
			label: "First name", 
			id: "first-name",
			// rules: {
			// 	required: "This is a required field"
			// }
		},
		{
			as: Input,
			placeholder: "Last name",
			type: "text",
			name: "lastName",
			label: "Last name", 
			id: "last-name",
			// rules: {
			// 	required: "This is a required field"
			// }
		},
		{
			as: Input,
			placeholder: "Age",
			type: "number",
			name: "age",
			label: "Age", 
			id: "age",
			// rules: {
			// 	valueAsNumber: true
			// }
		},
		{
			as: Input,
			placeholder: "E-mail",
			type: "email",
			name: "email",
			label: "E-mail", 
			id: "email",
			// rules: {
			// 	required: "This is a required field"
			// }
		},
		{
			as: Input,
			placeholder: "Password",
			type: "password",
			name: "password",
			label: "Password", 
			id: "password",
			// rules: {
			// 	required: "This is a required field",
			// 	minLength: {
			// 		value: 6,
			// 		message: 'Password should have minimum length of 6'
			// 	}
			// }
		},
		{
			as: Input,
			placeholder: "Confirm password",
			type: "password",
			name: "confirmPassword",
			label: "Confirm password", 
			id: "confirm-password",
			// rules: {
			// 	required: "This is a required field",
			// 	validate: confirmPasswordValue => {
			// 		const passwordValue = getValues('password')

			// 		if(confirmPasswordValue === passwordValue) return null

			// 		return 'Password and confirm password should match'
			// 	}
			// }
		} 
	]

	const fields = isLogInMode ? LOG_IN_FIELDS : REGISTER_FIELDS;

	return (
		<div className="auth-window">
			<div className="auth-window__title">
				<div className="auth-window__title-text">Вхід</div>
			</div>
			<div className="auth-window__sign-in sign-in d-flex justify-content-between align-items-center">
				<div className="sign-in__original-auth auth-original">
					<form autoComplete="off" noValidate className="auth-original__form mb-3">
						<fieldset className="auth-original__fieldset">
							{fields.map(({ id, ...other }) => (
							<FormControl 
							key={id}
							// control={control}
							id={id} 
							className="auth-original__form-control mb-4"
							// errors={errors}
							{...other} 
							/>
							))}
						</fieldset>
						<div class="auth-original__options d-flex justify-content-between">
							<div><input type='checkbox' name='remember-me' value='yes'/>Запам‘ятати мене</div>
							<div>Забули пароль?</div>
						</div>
						<Button type='submit' className='auth-original__submit-button w-100'>
							{isLogInMode ? 'Увійти' : 'Зареєструватись'}
						</Button>
					</form>
				<div className='auth-original__note-wrapper'>
					<button className='auth-original__switch-button' onClick={handleSwitchMode}>
						{isLogInMode ? 'Зареєструватись' : 'Увійти до свого аккаунта'}
					</button>
				</div>
				</div>
				<div className="sign-in__with-apps with-apps">
					<div className='with-apps__title'>Увійти як користувач</div>
					<div className='with-apps__google'><button><span></span>Google</button></div>
					<div className='with-apps__facebook'><button><span></span>Facebook</button></div>
				</div>
			</div>
		</div>
	)
}
