import {
	HeaderBlock,
	HoverLink,
	IconsBlock,
	IconTitle,
	InputAndButtonsBlock,
	LinksBlock,
	LogoAndLinksBlock,
	NavLink,
	SearchContainer,
	SearchImage,
	SearchInput
} from './Styles';
import Link from 'next/link';

import Image from 'next/image';

const links = [
	{
		title: 'MEN',
		path: '/'
	},
	{
		title: 'WOMEN',
		path: '/'
	},
	{
		title: 'HOME & LIVING',
		path: '/'
	}
];

const icons = [
	{
		img: '/profile.svg',
		title: 'Profile',
		path: '/profile'
	},
	{
		img: '/heart.svg',
		title: 'Wishlist',
		path: '/wishlist'
	},
	{
		img: '/cart.svg',
		path: '/cart',
		title: 'Bag'
	}
];

const Header = (props: any) => {
	const linksToRender = links.map(({ title, path }, i) => {
		return (
			<NavLink key={i}>
				<Link href={path}>
					<HoverLink>{title}</HoverLink>
				</Link>
			</NavLink>
		);
	});

	const iconsToRender = icons.map(({ img, title, path }, i) => (
		<Link href={path} key={i}>
			<a style={{ textAlign: 'center' }}>
				<img src={img} alt="test" />
				<IconTitle>{title}</IconTitle>
			</a>
		</Link>
	));

	return (
		<HeaderBlock>
			<LogoAndLinksBlock>
				<Link href="/">
					<a>
						<Image src="/logo.svg" width="102" height="82" />
					</a>
				</Link>
				<LinksBlock>{linksToRender}</LinksBlock>
			</LogoAndLinksBlock>
			<InputAndButtonsBlock>
				<SearchContainer>
					<SearchInput placeholder="Searh for ..." />
					<SearchImage src="search.png" />
				</SearchContainer>
				<IconsBlock>{iconsToRender}</IconsBlock>
			</InputAndButtonsBlock>
		</HeaderBlock>
	);
};

export default Header;
