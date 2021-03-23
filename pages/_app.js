import '../styles/globals.css';
import Layout from '../layouts';
import PropTypes from 'prop-types';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

Layout.propTypes = {
  Component: PropTypes.object,
  pageProps: PropTypes.any,
}