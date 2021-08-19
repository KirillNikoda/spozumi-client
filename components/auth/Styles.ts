import styled from 'styled-components';

export const Input = styled.input`
	background: #ffffff;
	border: 1px solid #656565;
	border-radius: 5px;
`;

export const InputsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputsTitle = styled.div`
	margin-top: 5px;
	font-family: Roboto;
	font-size: 16px;
	color: #000000;
`;

export const SubmitBtn = styled.button`
	min-width: 107px;
	cursor: pointer;
	height: 43px;
	background: #000000;
	border: 1px solid #f96e27;
	color: #ffffff;
	transition: 0.3s ease-out;
	border-radius: 10px;
	margin-top: 7px;

	:hover {
		background-color: ghostwhite;
		color: #000000;
	}

	:active {
		transform: translateY(-2px);
	}
`;
