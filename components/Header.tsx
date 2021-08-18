import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 60px;
	color: green;
`;

const Header = (props: any) => {
	return <Title>{props.children}</Title>;
};

export default Header;
