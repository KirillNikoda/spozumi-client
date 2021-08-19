import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import styled from 'styled-components';

export const CommonBlock = styled.div`
	margin: 0 auto;
	max-width: 1220px;
`;

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<CommonBlock>
				<Header />
			</CommonBlock>
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
export default App;
