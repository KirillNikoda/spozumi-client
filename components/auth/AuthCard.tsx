import { LoginUserDto, RegisterUserDto } from 'models/dtos.models';
import { useState } from 'react';
import { Input, InputsContainer, InputsTitle, InputsWrapper, SubmitBtn } from './Styles';

interface Props {
	btnText: string;
	onClick: (user: RegisterUserDto | LoginUserDto) => void;
}

const AuthCard = ({ btnText, onClick }: Props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<InputsWrapper>
			<InputsContainer>
				<InputsTitle>Email:</InputsTitle>
				<Input
					placeholder="Type your email address ..."
					value={email}
					onChange={(e) => {
						setEmail(e.currentTarget.value);
					}}
				/>
				<InputsTitle>Password:</InputsTitle>
				<Input
					placeholder="Type your password ..."
					onChange={(e) => {
						setPassword(e.currentTarget.value);
					}}
				/>
				<SubmitBtn
					onClick={() => {
						onClick({ email, password });
					}}
				>
					{btnText}
				</SubmitBtn>
			</InputsContainer>
		</InputsWrapper>
	);
};

export default AuthCard;
