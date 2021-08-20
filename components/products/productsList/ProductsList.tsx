import { useAppSelector } from 'store/hooks';
import ProductCard from '../productCard/ProductCard';
import { ProductListWrapper } from './Styles';
import WomenCard from '/public/women.svg';

const products = [
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	},
	{
		name: 'Куртка-рубашка',
		price: 530
	}
];

const ProductsList = () => {
	const productsFromBackEnd = useAppSelector((state) => state.products.products);
	console.log(productsFromBackEnd);

	const productsToRender = products.map((props) => <ProductCard {...props} />);

	return <ProductListWrapper>{productsToRender}</ProductListWrapper>;
};

export default ProductsList;
