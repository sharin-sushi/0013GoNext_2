// アプリケーション全体で共通のレイアウトを設定
// components ディレクトリを作成して Layout.js ファイルを作成します。
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}