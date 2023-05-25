import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { logoutUser } from '../../store/actions/auth';

import './Cabinet.scss';

const selectAccessToken = state => !!state.auth.accessToken;

const userInfo = state => state.auth.user;

export const Cabinet = () => {
	const isAuthenticated = useSelector(selectAccessToken);
	const {pathname} = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(userInfo);

	const handleLogout = () => {
		dispatch(logoutUser());
	}
	
	if(pathname === '/cabinet' && !isAuthenticated ) return navigate('/')

	return (
		<div className="cabinet text-center my-5">
			<h2>Особисті дані</h2>
			<div className="cabinet-info">
				<div className="cabinet-info__name">Імя: Кирило Буданов</div>
				<div className="cabinet-info__email">Email: sby@gmail.com</div>
				<div className="cabinet-info__phone">Phone: 380661966012</div>
			</div>
			<div className="cabinet-exit" onClick={handleLogout}>Вийти з аккаунта</div>
		</div>
	)
}
