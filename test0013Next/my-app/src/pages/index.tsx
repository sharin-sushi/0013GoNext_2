// ページを開いてスクロールをしていくと about のリンクがブラウザ上に表示された瞬間に aboutXXX.js 
// ファイルのダウンロードが行われます。これが prefetch です。
// import Link from 'next/link';
// const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
// export default function Home() {
//   return (
//     <div>
//       <ul>
//         {products.map((product) => {
//           return (
//             <li key={product.name}>
//               <Link href={`/products/${product.name}`}>
//                 {product.name}
//               </Link>
//             </li>
//           );
//         })}
//         <li style={{ marginTop: '100em' }}>
//           <Link href="/about">
//             About
//           </Link>
//         </li>
//       </ul>
//       <h1>Hello Next.js</h1>
//     </div>
//   );
// }

// 〇main
// 移動先の情報の入った配列を利用してダイナミックルーティングを行いたい場合も
// 下記のように設定することでページのリロードなしにページ遷移することができます。
// リンクがブラウザの viewport(ビューポート)に入ると自動でリンク先の
// JavaScript ファイルのダウンロードを行います。
// 動作確認はnpm run build,  npm run start
// また、prefetchをfalseにすると　<link href="/about" prefetch="{false}" />
// hoverによりダウンロードするようになる。
// import Link from 'next/link';
// import Image from 'next/image'
// import Head from 'next/head';
// const products = [{ name: 'おいもらぶ'}, { name: 'bag' }, { name: 'shoes' }, { name: 'socks' }, { name: 'cap' }];



// export default function Home() {
//   return (
//     <div>
//         {/* メタタグ＝ブラウザのタグの名前
//         ググったときに上位に表示してもらう→SEO対策？ */}
//       <Head>
//         <title>{products[0].name}</title>
//         <meta name="description" content={`${products[0].name}のページ`} />
//         <meta property="og:title" content={products[0].name} />
//         <meta
//           property="og:description"
//           content={`${products[0].name}のページ`}
//           />
//       </Head>
//       <ul>
//         {products.map((product) => {
//           return (
//             <li key={product.name}>
//               <Link href={`/products/${product.name}`}>
//                 {product.name}
//               </Link>
//             </li>
//           );
//         })}
//         <li>
//           <Link href="/about">
//             About
//           </Link>
//         </li>
//       </ul>
//       <h1>Hello Next.js</h1>
      
//       <Image src="/imo_toreca.jpg" height={200} width={200}   />
//      {/* 画像はpublicに？ */}

//      <Image
//        src="https://pbs.twimg.com/media/Fzx7TAlaQAEzW1P?format=jpg&name=large"
//         alt="Image"
//         width={828/2.32}
//         height={466/2.32}
//         // next.config.jsに画像のリンク先ドメインを登録する必要がある。
//       />
//     </div>
//   );
// }


//　ーーーーーーーーーーーーーーーーーーー
//〇pre-rendering 
// ・getServerSideProps 
// Next.jsのページコンポーネント(pagesディレクトリ内のファイル)でのみ使用可能
// export default function index({ posts }) {
//   return (
//     <div>
//       <h1>POST一覧</h1>
//       <ul>
//         {posts.map((post) => {
//           return <li key={post.id}>{post.title}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   console.log(posts);
//   return { props: { posts } };
// }

// 個々のjsonデータにリンク付け()
// import Link from 'next/link';
// export default function index({ posts }) {
//   return (
//     <div>
//       <h1>POST一覧</h1>
//       <ul>
//         {posts.map((post) => {
//           return (
//             <li key={post.id}>
//               <Link href={`/posts/${post.id}`}>
//                 {post.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   console.log(posts);
//   return { props: { posts } };
// }

// ↓
//個々のページに内容を表示
// postのIDを取得して再度 JSONPlaceholder にアクセスを行い、個別ページの情報を取得
//mapメソッドでposts配列をループ
import Link from 'next/link';
import { Post } from '../types/types';
// import { useRouter } from 'next/router';
export default function Index({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>POST一覧</h1>
      <ul>
        {posts.map((post) => {
          
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
}
// URLが/posts/1の場合、paramsオブジェクトは{ id: "1" }

// ーーーーーーーーーーーーーーーーーーーーーーー

// 〇hrefにはパスでなく、オブジェクトも利用できる。
// import Link from 'next/link';
// export default function Home() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link href={{
//             pathname: '/name',
//             query: { name: 'test' },
//           }}
//           >
//             About
//           </Link>
//         </li>
//       </ul>
//       <h1>Hello Next.js</h1>
//     </div>
//   );
// }
// アクセスはhttp://localhost:3000/about?name=test
// （urlは↓と同じ）

// 〇hrefの値にパスを使う
//      <Link href="/about">
//        <a>About</a>
//      </Link>
// http://localhost:3000/about


// 〇HTML的な書き方(クライアントサイドレンダリング
//       <li>
//         <a href="/about">About</a>
//       </li>


// 参考
// reffect.co.jp/react/next-js