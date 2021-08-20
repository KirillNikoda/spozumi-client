import { Card, CardImage, CardPrice, CardTitle } from './Styles';
import WomenCard from '/public/women.svg';

interface Props {
	name: string;
	price: number;
}

const ProductCard = ({ name, price }: Props) => {
	return (
		<Card>
			<CardImage>
				<WomenCard />
			</CardImage>
			<CardTitle>{name}</CardTitle>
			<CardPrice>{price}</CardPrice>
		</Card>
	);
};

export default ProductCard;
