import styled from 'styled-components';

export const HeaderBlock = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoAndLinksBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LinksBlock = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
`;

export const NavLink = styled.li`
	font-family: 'Monda';
	font-weight: 700;
	font-size: 14px;

	color: #000000;
`;

export const InputAndButtonsBlock = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 40px;
	margin-top: 15px;
`;

export const SearchInput = styled.input`
	max-width: 436px;
	height: 34.55px;
	padding: 9px 8px;
	background: #ffffff;
	border: 1px solid #000000;
	border-radius: 5px;
`;

export const IconsBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
`;

export const Icon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	align-items: center;
`;

export const IconTitle = styled.p`
	font-family: Monda;
	font-size: 10px;
	color: #000000;
`;
