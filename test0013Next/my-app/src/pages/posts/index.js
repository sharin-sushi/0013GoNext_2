import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
// const "関数名" =　("引数") => 関数の本体 =>次の関数の本体(orメソッド？)
// fetchがHTTPリクエスト、thenがGETリクエスト

export default function Index() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>POST一覧</h1>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

// ↑swr導入
// ↓そもそも別のページのが混ざってる？
// import { Post } from '../../types/types';
// 
// export default function Index({ posts }) {
//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h1>POST(投稿){post.id}</h1>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// // ↓このページはgetStaticProps(SSG) getServerSidePropsどっちに書き換えても動く
// //ダイナミックSSG([].js)だとgetStaticPaths が必要
// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// }
// 
// サイトの元コードはこれ？
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