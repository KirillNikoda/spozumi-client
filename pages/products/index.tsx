import { productsApi } from 'api/products.api';
import ProductsMain from 'components/products/ProductsMain';
import { GetServerSideProps, NextPage } from 'next';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { setError, setProducts } from 'store/actions/productsActions';
import { useAppDispatch, useAppSelector } from 'store/hooks';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dispatch = useAppDispatch();

	try {
		const { data } = await productsApi.getProducts();
		console.log(data);
		dispatch(setProducts(data));
	} catch (e: any) {
		console.log(e.request);
		dispatch(setError(e.request));
	}

	return {
		props: {}
	};
};
