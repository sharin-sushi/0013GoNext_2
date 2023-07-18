// "/admin"以下のURLのレイアウトに適用
// import Layout from '../components/layout';
// import AdminLayout from '../components/AdminLayout';
// import { useRouter } from 'next/router';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const admin = router.route.startsWith('/admin') ? true : false;
//   const getLayout = admin
//     ? (page) => <AdminLayout>{page}</AdminLayout>
//     : (page) => <Layout>{page}</Layout>;

//   return <>{getLayout(<Component {...pageProps} />, pageProps)}</>;
// }

// export default MyApp;

// getLayoutをimportしたファイルにだけ適用
import { Post } from '../types/types';
export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

// ↑一部だけに適用
// ↓全てに適用

// _app.js ファイルはアプリケーションのエントリーポイントに当たるファイルですべてのページは
// このファイルによってラップされています。
// さらに、ここでlayoutファイルをimportして全ファイルに適用。
// import '../styles/globals.css';
// import Layout from '../components/layout';

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }