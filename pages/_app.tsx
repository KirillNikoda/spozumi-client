import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import Header from '../components/header/Header';
import styled from 'styled-components';

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 1220px;
`;

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AppBlock>
				<Header />
				<Component {...pageProps} />
			</AppBlock>
		</Provider>
	);
}
export default App;
