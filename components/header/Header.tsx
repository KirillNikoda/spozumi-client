import {
	HeaderBlock,
	Icon,
	IconsBlock,
	IconTitle,
	InputAndButtonsBlock,
	LinksBlock,
	LogoAndLinksBlock,
	NavLink,
	SearchInput
} from './Styles';
import Logo from '/public/logo.svg';
import Link from 'next/link';
import ProfileIcon from '/public/profile.svg';
import HeartIcon from '/public/heart.svg';
import CartIcon from '/public/cart.svg';
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
		img: <ProfileIcon />,
		title: 'Profile',
		path: '/profile'
	},
	{
		img: <HeartIcon />,
		title: 'Wishlist',
		path: '/wishlist'
	},
	{
		img: <CartIcon />,
		path: '/cart',
		title: 'Bag'
	}
];

const Header = (props: any) => {
	const linksToRender = links.map(({ title, path }) => {
		return (
			<NavLink>
				<Link href={path}>
					<a>{title}</a>
				</Link>
			</NavLink>
		);
	});

	const iconsToRender = icons.map(({ img, title, path }) => (
		<Link href={path}>
			<a>
				<Icon>
					{img}
					<IconTitle>{title}</IconTitle>
				</Icon>
			</a>
		</Link>
	));

	return (
		<HeaderBlock>
			<LogoAndLinksBlock>
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>
				<LinksBlock>{linksToRender}</LinksBlock>
			</LogoAndLinksBlock>
			<InputAndButtonsBlock>
				<SearchInput placeholder="Searh for ..." />
				<IconsBlock>{iconsToRender}</IconsBlock>
			</InputAndButtonsBlock>
		</HeaderBlock>
	);
};

export default Header;
