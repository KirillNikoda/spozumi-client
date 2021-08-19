import { Line, SidebarWrapper, Title } from './Styles';

const Sidebar = () => {
	return (
		<SidebarWrapper>
			<Title>Filters</Title>
			<Line />
			<Title>Categories</Title>
			<Line />
			<Title>Brand</Title>
			<Line />
			<Title>Price</Title>
			<Line />
			<Title>Color</Title>
		</SidebarWrapper>
	);
};

export default Sidebar;
