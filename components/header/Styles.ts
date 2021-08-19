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

export const HoverLink = styled.a`
	transition: 0.3s ease-out;
	cursor: pointer;
`;

export const NavLink = styled.li`
	font-family: 'Monda';
	font-weight: 700;
	font-size: 14px;

	color: #000000;
	${HoverLink}:hover {
		color: gold;
	}
`;

export const InputAndButtonsBlock = styled.div`
	max-width: 600px;
	display: grid;
	grid-template-columns: 2fr 1fr;
	margin-top: 15px;
`;

export const SearchContainer = styled.div`
	position: relative;
`;

export const SearchInput = styled.input`
	height: 34.55px;
	padding: 9px 8px;
	background: #ffffff;
	border: 1px solid #000000;
	border-radius: 5px;
	width: 436px;
	max-width: 436px;
`;

export const SearchImage = styled.img`
	position: absolute;
	right: 13px;
	top: 8px;
`;

export const IconsBlock = styled.div`
	margin-left: 30px;
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

export const LinkWrapper = styled.div`
	transition: 0.3s ease-in-out;
	:hover {
		transform: translateX(1.1);
	}
`;
