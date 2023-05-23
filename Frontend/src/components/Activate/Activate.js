import { useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useMutation } from "../../hooks/useMutation";
import { authenticateUser } from '../../store/actions/auth';

export const Activate = (match) => {

	const [verified, setVerified] = useState(false);

	const activationUrl = 'http://127.0.0.1:8000/auth/users/activation/'

	const dispatch = useDispatch();

	const {mutate} = useMutation({
		url: activationUrl,
		headers: {
			'Content-Type': 'application/json'
		},
		onSuccess: response => {
			
			const { uid, token } = response;
			// Handle errors
			if (!uid && !token) return alert('Запит пройшов, але токенів нема');
			dispatch(authenticateUser(uid, token))
			// console.log(token, uid);
		},
		onError: () => alert('Запит не був відправлений')
	});

	const { uid } = useParams();
	const { token } = useParams();

	const verifyAccount = e => {

		mutate(JSON.stringify({ uid, token }));
      setVerified(true);
	}

	if (verified) {
		return <Navigate to="/"/>;
	}

	return (
	<div className="activate d-flex justify-content-center align-items-center my-5">
		<Button type="submit" onClick={verifyAccount}>Activate your account</Button>
	</div>
	)
}

// export default Activate;