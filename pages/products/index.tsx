import { Fragment } from 'react';
import Header from '../../components/header/Header';
import { CommonBlock, RoutingDescription, RoutingWrapper } from './Styles';

export default function Products() {
	return (
		<Fragment>
			<CommonBlock>
				<Header />
			</CommonBlock>
			<RoutingWrapper>
				<CommonBlock>
					<RoutingDescription>Home / Clothing / Application List</RoutingDescription>
				</CommonBlock>
			</RoutingWrapper>
		</Fragment>
	);
}
