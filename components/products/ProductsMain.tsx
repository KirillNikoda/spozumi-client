import { Product } from 'models/product.models';
import { CommonBlock } from 'pages/products/Styles';
import ProductsList from './productsList/ProductsList';
import Sidebar from './sidebar/Sidebar';
import Sort from './sort/Sort';
import { FiltersSidebar, Products, ProductsMainWrapper, Wrapper } from './Styles';

const ProductsMain = () => {
	return (
		<Wrapper>
			<CommonBlock>
				<ProductsMainWrapper>
					<FiltersSidebar>
						<Sidebar />
					</FiltersSidebar>
					<Products>
						<Sort />
						<ProductsList />
					</Products>
				</ProductsMainWrapper>
			</CommonBlock>
		</Wrapper>
	);
};

export default ProductsMain;
