import { useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useMutation } from "../../hooks/useMutation";
import { authenticateUser } from '../../store/actions/auth';

export const Activate = (match) => {

	const [verified, setVerified] = useState(false);

	const activationUrl = 'http://127.0.0.1:8000/api/auth/users/activation/';

	const {pathname} = useLocation();
	const navigate = useNavigate();
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


	const verifyAccount = e => {
		const uid = match.params.uid;
      const token = match.params.token;

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