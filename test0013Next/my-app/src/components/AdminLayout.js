import Layout from '../components/layout';
import AdminLayout from '../components/AdminLayout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const admin = router.route.startsWith('/admin') ? true : false;
  const getLayout = admin
    ? (page) => <AdminLayout>{page}</AdminLayout>
    : (page) => <Layout>{page}</Layout>;

  return <>{getLayout(<Component {...pageProps} />, pageProps)}</>;
}

export default MyApp;