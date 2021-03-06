import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import { DataProvider } from '@context/GlobalState';
import Layout from '@components/layout/Layout';
import { initRouterListeners } from '@utils/scrollRestoration';

initRouterListeners();

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </DataProvider>
  );
}

export default MyApp;
