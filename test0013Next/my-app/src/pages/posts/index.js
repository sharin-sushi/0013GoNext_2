import { Post } from '../../types/types';

export default function Index({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>POST(投稿){post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

// ↓このページはgetStaticProps(SSG) getServerSidePropsどっちに書き換えても動く
//ダイナミックSSG([].js)だとgetStaticPaths が必要
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
}