import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import { DataProvider } from '@context/GlobalState';
import Layout from '@components/layout/Layout';
import { initRouterListeners } from '@utils/scrollRestoration';
import { QueryClient, QueryClientProvider } from 'react-query';

initRouterListeners();

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <Provider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
