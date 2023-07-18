import { useRouter } from 'next/router';
export default function Name() {
  const router = useRouter();
  return <h1>商品{router.query.name}のページです</h1>;
}


// 〇urlから文字取得
// import { useRouter } from 'next/router';
// const router = useRouter();
// router.query.name

// Dynamic Routing
//　ファイル名を[name].jsにすると、url:フォルダ名/~~ でどんなurlでも表示される
// export default function Name() {
//   return <h1>商品のページです</h1>;
// }