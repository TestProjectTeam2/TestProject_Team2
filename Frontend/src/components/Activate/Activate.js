import { useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useMutation } from "../../hooks/useMutation";

export const Activate = () => {

	const [verified, setVerified] = useState(false);

	const activationUrl = 'http://127.0.0.1:8000/api/auth/users/activation/';

	const dispatch = useDispatch();

	const {mutate} = useMutation({
		url: activationUrl,
		headers: {
			'Content-Type': 'application/json'
		},
		onSuccess: response => {
			if (response) return alert('Запит успішний');
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
		return <Navigate to="/login"/>;
	}

	return (
	<div className="activate d-flex justify-content-center align-items-center my-5">
		<div className="activate-container text-center p-5">
			<h1 className="my-5">Activate your account</h1>
			<Button type="button"  className="my-5" onClick={verifyAccount}>Activate</Button>
		</div>
	</div>
	)
}
