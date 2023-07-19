// ーーーーーーーーーーーーーーーーーーーー
// 〇getStaticProps　SSR：Static Site Generation
// クライアント側でコードの内容を確認することもできません
import { Post } from '../../types/types';


export default function Post({ post }: { post: Post }) {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

// export async function getStaticProps({ params }: { params: { post: string } }) {
  export async function getStaticProps({ params }: { params: Post[] }) {
  // const { id } = params 
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // fetch 外部APIから非同期でデータ取得
  const post: Post = await res.json();
  // fetch APIを利用して取得したレスポンスデータをjson形式にパースする。
  // 非同期的処理。Promiseを返す。
  return { props: { post } };
  // returnにより、データを props オブジェクトの中に格納して返している。
  // ここで post は、取得した投稿データやその一部を指す。
}

// ダイナミックSSGの時に必要
// (動的なルートを使用する場合に、どのパスを事前に生成するかを指定する)
//{ params }: { params: { post: string } }

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await res.json();
  const paths = posts.map((post) => `/posts/${post.id}`);
  
  return {
    paths: paths || [],
    // paths: paths || []は、pathsが存在する場合はその値を使用し、
    // 存在しない場合は空の配列 [] を使用するという意味です。
    fallback: false,
  };
}
 // postオブジェクトがプロパティを持っていない場合(空)の場合にtrueを返す。
 // Object.keys(post)はpostのキーを配列として取得し、lengthでその長さを取得。
 // 長さが0であればtrueを返す。

// 別の書き方
// const paths = posts.map((post) => ({
//   params: { post: post.id.toString() },
// }));

// ーーーーーーーーーーーーーーーーーーーー

// ーーーーーーーーーーーーーーーーーーーー
// 〇getServerSideProps SSG：Server Side Rendering
// export default function post({ post }) {
//   // console.log(post.id);
//   // // 元サイトには無かったけど、ここじゃないと動かなかった
//   return (
//     <div>
//       <h1>POST(投稿){post.id}</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// // export async function getServerSideProps({ params }) {
// //   const id = params.post;
// //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// //   const post = await res.json();
// //   console.log(post);
// //   if (!Object.keys(post).length) {
// //     return {
// //       notFound: true,
// //     };
// //   }
// //   return { props: { post } };
// // }

// // ↓存在しない ID でアクセスした場合に404を出す。
// export async function getServerSideProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   console.log(post);
//   if (!Object.keys(post).length) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { post } };
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーー