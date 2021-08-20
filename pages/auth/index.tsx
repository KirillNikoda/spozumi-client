import AuthCard from 'components/auth/AuthCard';
import { LoginUserDto, RegisterUserDto } from 'models/dtos.models';
import { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import styled from 'styled-components';
import { AuthWrapper } from './Styles';
import { register, login } from '../../store/thunks/userThunks';
const CommonBlock = styled.div`
	margin: 0 auto;
	max-width: 1220px;
	height: 50vh;
	background-color: #f3f2f2;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState<boolean>(true);
	const dispatch = useAppDispatch();

	async function signUp(user: any) {
		dispatch(register(user)).then((res) => {
			setIsSignUp(!isSignUp);
		});
	}

	async function signIn(user: any) {
		dispatch(login(user)).then((res: any) =>
			localStorage.setItem('token', res.payload.access_token)
		);
	}

	return (
		<CommonBlock>
			<AuthWrapper>
				{isSignUp ? (
					<AuthCard onClick={signUp} btnText={'Зарегистрироваться'} />
				) : (
					<AuthCard btnText={'Войти'} onClick={signIn} />
				)}
			</AuthWrapper>
		</CommonBlock>
	);
};

export default Auth;
