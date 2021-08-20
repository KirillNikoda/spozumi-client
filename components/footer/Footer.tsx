import {
	AppFooter,
	BenefitsDescription,
	BenefitsLink,
	BenefitsTitle,
	BenefitsWrapper,
	CommonBlock,
	DaxxTitle,
	Line,
	LinksWrapper,
	ServiceAndSecurity,
	ServiceAndSecurityTitle,
	SocialsContainer,
	SocialsFollow,
	SocialsIconWrapper,
	SocialsWrapper,
	TrendUpdatesAndMoreBtn,
	TrendUpdatesAndMoreInput,
	TrendUpdatesAndMoreInputAndBtnBlock,
	TrendUpdatesAndMoreTitle,
	TrendUpdatesAndMoreWrapper
} from './Styles';

import Image from 'next/image';
import Link from 'next/link';

const benefits = [
	{
		title: 'Fast delivery',
		description: 'Delivery within 1 business day'
	},
	{
		title: 'Free returns within 30 days',
		description: 'Convenient return service'
	},
	{
		title: 'Secure payment and data protection',
		description: 'SSL encryption for secure transactions and personal data'
	}
];

const links = [
	{
		path: '/about-us',
		title: 'About Us'
	},
	{
		path: '/services',
		title: 'Trust & services'
	},
	{
		path: '/press',
		title: 'Press'
	},
	{
		path: '/products',
		title: 'Shop'
	}
];

const icons = [
	{
		path: '/facebook.svg'
	},
	{
		path: '/twitter.svg'
	},
	{
		path: '/vk.svg'
	}
];

export default function Footer() {
	const benefitsToRender = benefits.map(({ title, description }, i) => (
		<div key={i}>
			<BenefitsTitle>{title}</BenefitsTitle>
			<BenefitsDescription>{description}</BenefitsDescription>
		</div>
	));

	const linksToRender = links.map(({ path, title }, i) => (
		<div style={{ marginBottom: '12px' }}>
			<Link href={path} key={i}>
				<BenefitsLink>{title}</BenefitsLink>
			</Link>
		</div>
	));

	const iconsToRender = icons.map(({ path }, i) => (
		<SocialsIconWrapper key={i}>
			<Link href="#">
				<a>
					<Image src={path} width={16} height={16} />
				</a>
			</Link>
		</SocialsIconWrapper>
	));

	return (
		<CommonBlock>
			<Line />
			<AppFooter>
				<ServiceAndSecurity>
					<ServiceAndSecurityTitle>SERVICE & SECURITY</ServiceAndSecurityTitle>
					<BenefitsWrapper>{benefitsToRender}</BenefitsWrapper>
				</ServiceAndSecurity>
				<LinksWrapper>
					<DaxxTitle>DAXXSTYLE</DaxxTitle>
					{linksToRender}
				</LinksWrapper>
				<TrendUpdatesAndMoreWrapper>
					<TrendUpdatesAndMoreTitle>
						GET TREND UPDATES, STYLE TIPS AND MORE
					</TrendUpdatesAndMoreTitle>
					<TrendUpdatesAndMoreInputAndBtnBlock>
						<TrendUpdatesAndMoreInput placeholder="Type your email address here ..." />
						<TrendUpdatesAndMoreBtn>Send</TrendUpdatesAndMoreBtn>
					</TrendUpdatesAndMoreInputAndBtnBlock>
					<SocialsWrapper>
						<SocialsFollow>Follow us on</SocialsFollow>
						<SocialsContainer>{iconsToRender}</SocialsContainer>
					</SocialsWrapper>
				</TrendUpdatesAndMoreWrapper>
			</AppFooter>
		</CommonBlock>
	);
}
