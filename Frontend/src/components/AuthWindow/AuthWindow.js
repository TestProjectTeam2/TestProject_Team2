import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import { authenticateUser } from '../../store/actions/auth';
import { useMutation } from '../../hooks/useMutation';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';

import './AuthWindow.scss';

const LOG_IN_MODE = 'log-in';
const REGISTER_MODE = 'register';
const EMAIL_PATTERN = /^[a-zA-Z-._0-9]+@[a-z]+\.[a-z]{2,3}$/

const authUrl = 'http://127.0.0.1:8000/auth/users/';

const LOG_IN_FIELDS = [
	{
		as: Input,
		placeholder: "example@go.com",
		type: "email",
		name: "email",
		label: "E-mail", 
		id: "email",
		rules: {
			required: "This is a required field",
			pattern: {
				value: EMAIL_PATTERN,
				message: "Error!"
			}
		}
	},
	{
		as: Input,
		placeholder: "xxxxxxxx",
		type: "password",
		name: "password",
		label: "Пароль", 
		id: "password",
		rules: {
			required: "This is a required field",
			minLength: {
				value: 8,
				message: 'Password should have minimum length of 8'
			}
		}
	}
]
const selectIdToken = state => !!state.auth.token;

export const AuthWindow = () => {

	const [mode, setMode] = useState(LOG_IN_MODE);

	const isLogInMode = mode === LOG_IN_MODE;


	const handleSwitchMode = () => {
		setMode(prevMode => (prevMode === LOG_IN_MODE ? REGISTER_MODE : LOG_IN_MODE));
	};

	const { control, handleSubmit, formState: {errors}, formState, getValues, clearErrors, reset } = useForm({});

	const isAuthenticated = useSelector(selectIdToken);
	const dispatch = useDispatch();

	const {mutate} = useMutation({
		url: authUrl,
		headers: {
			'Content-Type': 'application/json'
		},
		onSuccess: response => {
			
			const { name } = response;
			// Handle errors
			if (!name) return alert('Помилка. Можливо користувач вже існує');
			alert(`Вітаю ${name}Перейдіть на пошту, щоб підтвердити обліковий запит`)
		},
		onError: () => alert(`Запит не був відправлений.`)
});

	useEffect(() => {
		reset();
		clearErrors();
	}, [mode, reset, clearErrors]);

	const onSubmit = values => {
		mutate(JSON.stringify(values));
	}
	const onError = errors => console.log(errors);

	const REGISTER_FIELDS = [
		{
			as: Input,
			placeholder: "Ім'я",
			type: "text",
			name: "name",
			label: "Ім'я", 
			id: "name",
			rules: {
				required: "This is a required field"
			}
		},
		{
			as: Input,
			placeholder: "Прізвище",
			type: "text",
			name: "last_name",
			label: "Прізвище", 
			id: "last_name",
			rules: {
				required: "This is a required field"
			}
		},
		{
			as: Input,
			placeholder: "example@go.com",
			type: "email",
			name: "email",
			label: "E-mail", 
			id: "email",
			rules: {
				required: "This is a required field",
				pattern: {
					value: EMAIL_PATTERN,
					message: "Error!"
				}
			}
		},
		{
			as: Input,
			placeholder: "+38xxx xx xx xxx",
			type: "tel",
			name: "phone",
			label: "Телефон", 
			id: "phone",
			rules: {
				required: "This is a required field"
			}
		},
		{
			as: Input,
			placeholder: "xxxxxxxx",
			type: "password",
			name: "password",
			label: "Пароль", 
			id: "password",
			rules: {
				required: "This is a required field",
				minLength: {
					value: 8,
					message: 'Password should have minimum length of 8'
				}
			}
		},
		{
			as: Input,
			placeholder: "xxxxxxxx",
			type: "password",
			name: "re_password",
			label: "Підтвердіть пароль", 
			id: "re_password",
			rules: {
				required: "This is a required field",
				validate: confirmPasswordValue => {
					const passwordValue = getValues('password')

					if(confirmPasswordValue === passwordValue) return null

					return 'Password and confirm password should match'
				}
			}
		} 
	]

	const fields = isLogInMode ? LOG_IN_FIELDS : REGISTER_FIELDS;

	const { isSubmitting } = formState;

	return (
		<div className="auth-window">
			<div className="auth-window__title">
				<div className="auth-window__title-text">Вхід</div>
			</div>
			<div className="auth-window__sign-in sign-in d-flex justify-content-between align-items-center">
				<div className="sign-in__original-auth auth-original">
					<form autoComplete="off" noValidate className="auth-original__form mb-3" onSubmit={handleSubmit(onSubmit, onError)}>
						<fieldset className="auth-original__fieldset">
							{fields.map(({ id, ...other }) => (
							<FormControl 
							key={id}
							control={control}
							id={id} 
							className="auth-original__form-control mb-4"
							errors={errors}
							{...other} 
							/>
							))}
						</fieldset>
						<div className="auth-original__options d-flex justify-content-between">
							<div><input type='checkbox' name='remember-me' value='yes'/>Запам‘ятати мене</div>
							<div>Забули пароль?</div>
						</div>
						<Button type='submit' className='auth-original__submit-button w-100' disabled={isSubmitting}>
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
