import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";

import Layout from "@components/Layout";
import { persistor, store } from "@redux/configureStore";

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  </Provider>
);

export default App;
