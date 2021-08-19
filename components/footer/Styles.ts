import styled from 'styled-components';

export const CommonBlock = styled.div`
	max-width: 1220px;
	margin: 0 auto;
	@media (max-width: 1225px) {
		max-width: 85%;
	}
`;

export const Line = styled.div`
	margin-top: 49px;
	height: 0px;
	border: 1px solid #000000;
`;

export const LineContainer = styled.div`
	width: 1212px;
`;

export const AppFooter = styled.footer`
	margin-top: 46px;
	padding-left: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 150px;
`;

export const ServiceAndSecurity = styled.div``;

export const ServiceAndSecurityTitle = styled.h2`
	font-size: 20px;

	color: #000000;
`;

export const BenefitsWrapper = styled.div`
	max-width: 213px;
`;

export const BenefitsTitle = styled.p`
	font-size: 15px;
	font-weight: 600;
	color: #000000;
`;

export const BenefitsLink = styled.a`
	font-size: 15px;
	font-weight: 600;
	color: #000000;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	:hover {
		color: gold;
	}
`;

export const BenefitsDescription = styled.p`
	font-size: 12px;
	color: #000000;
`;

export const LinksWrapper = styled.div`
	padding-bottom: 22px;
`;

export const DaxxTitle = styled.h2`
	font-weight: 700;
	font-size: 22px;

	color: #000000;
`;

export const TrendUpdatesAndMoreWrapper = styled.div``;

export const TrendUpdatesAndMoreTitle = styled.h2`
	font-size: 16px;
	font-weight: 500;
	color: #000000;
`;

export const TrendUpdatesAndMoreInputAndBtnBlock = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 13px;
`;

export const TrendUpdatesAndMoreInput = styled.input`
	width: 386px;
	height: 43px;
	background: #ffffff;
	border: 1px solid #000000;
	border-radius: 5px 0px 0px 5px;
	padding: 15px;
	transition: 0.2s ease-out;
	outline: none;

	:focus {
		border: 1.2px solid #f96e27;
	}
`;

export const TrendUpdatesAndMoreBtn = styled.button`
	min-width: 107px;
	cursor: pointer;
	height: 43px;
	background: #f96e27;
	border: 1px solid #f96e27;
	border-radius: 0px 5px 5px 0px;
	color: #ffffff;
	transition: 0.3s ease-out;

	:hover {
		background-color: white;
		color: #000000;
	}

	:active {
		transform: translateY(-2px);
	}
`;

export const SocialsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 103px;
`;

export const SocialsFollow = styled.h2`
	font-size: 16px;
	color: #000000;
`;

export const SocialsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 30px;
`;

export const SocialsIconWrapper = styled.div``;
