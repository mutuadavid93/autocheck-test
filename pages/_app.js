import "../styles/css/bootstrap.css";
import "../styles/css/style.css";
import "../styles/css/fontawesome-all.css";
import "../styles/css/popuo-box.css";
import "../styles/css/menu.css";
import Layout from "../components/layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
