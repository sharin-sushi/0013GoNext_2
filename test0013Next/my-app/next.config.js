/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  // Next.jsでnpm run buildできないときにswxMinify:true→falsesしてみる
  // SWCコンパイラによる最適化が無効化される
  // https://qiita.com/sddd3/items/89d3c4b4fec0342b649f
}

// module.exports = nextConfig
// 元コード

module.exports = {
  images: {
    domains: ['pbs.twimg.com','jsonplaceholder.typicode.com']
  },
};
