import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import Footer from 'components/footer/Footer';
import styled from 'styled-components';

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
export default App;
