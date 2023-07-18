
import Layout from '../components/layout';

export default function About() {
  return <h1>About Page</h1>
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
};

// ↑このページにだけlayoutを適用させる。_app.jsとセットでコード変更。
// 特に何も
// const About = () => {
//   return (
//     <h1>About Page</h1>
//   )
// }

// export default About