import "../styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "../components/otherComponents/Navbar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname === "/_error");
  return (
    <Provider store={store}>
      {router.pathname === "/login" || router.pathname === "/_error" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Component {...pageProps} />
    </Provider>
  );
}
