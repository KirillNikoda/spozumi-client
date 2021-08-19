import ProductsMain from 'components/products/ProductsMain';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { CommonBlock, RoutingDescription, RoutingWrapper } from './Styles';

const Products: NextPage = () => {
	return (
		<Fragment>
			<RoutingWrapper>
				<CommonBlock>
					<RoutingDescription>Home / Clothing / Application List</RoutingDescription>
				</CommonBlock>
			</RoutingWrapper>
			<ProductsMain />
		</Fragment>
	);
};

export default Products;
