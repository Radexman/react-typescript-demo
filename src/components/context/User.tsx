import { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
	const userContext = useContext(UserContext);

	const handleLogin = () => {
		if (userContext) {
			userContext.setUser({
				name: 'Emilia',
				email: 'emilia@gmail.com',
			});
		}
	};

	const handleLogout = () => {
		if (userContext) {
			userContext.setUser(null);
		}
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User name is {userContext.user?.name}</p>
			<p>User email is {userContext.user?.email}</p>
		</div>
	);
};

export default User;
