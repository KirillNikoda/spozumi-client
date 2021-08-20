import { ArrowBtn, SortContainer, SortCriteria, SortCriteriaBlock, SortTitle } from './Styles';
import Image from 'next/image';
import Arrow from '/public/arrow.svg';

const Sort = () => {
	return (
		<SortContainer>
			<SortCriteriaBlock>
				<SortCriteria>
					<SortTitle>Bundles</SortTitle>
					<ArrowBtn>
						<Arrow />
					</ArrowBtn>
				</SortCriteria>
				<SortCriteria>
					<SortTitle>Country of origin</SortTitle>
					<ArrowBtn>
						<Arrow />
					</ArrowBtn>
				</SortCriteria>
				<SortCriteria>
					<SortTitle>Size</SortTitle>
					<ArrowBtn>
						<Arrow />
					</ArrowBtn>
				</SortCriteria>
			</SortCriteriaBlock>
		</SortContainer>
	);
};

export default Sort;
