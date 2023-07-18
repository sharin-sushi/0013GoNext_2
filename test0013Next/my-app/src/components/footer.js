// export default function Footer() {
//   return (
//     <div>
//       <p>Footerコンポーネント</p>
//     </div>
//   );
// }

// _app.js を利用することでコンポーネントの状態が保持
// (ページ遷移してもcountがリセットされない)
import { useState } from 'react';
export default function Footer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Count+</button>
        <button onClick={() => setCount(count - count)}>Count reset</button>
      </div>
      <p>Footerコンポーネント</p>
    </div>
  );
}