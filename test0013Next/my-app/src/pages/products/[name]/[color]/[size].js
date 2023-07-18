// import { useRouter } from 'next/router';
// export default function size() {
//   const router = useRouter();
//   console.log(router.query);
//   return (
//     <h1>
//       {router.query.name}の{router.query.color}の{router.query.size}カラーです
//     </h1>
//   );
// }


import { useRouter } from 'next/router';
export default function Color() {
  const router = useRouter();
  const { color } = router.query;6
  //ディレクトリ名の[]に値するurlを取得ぽい
  return (
    <h1>
      {/* {name}"の"{size}"サイズだよ */}
      <br></br>
      サインはb {color}
    </h1>
  );
}