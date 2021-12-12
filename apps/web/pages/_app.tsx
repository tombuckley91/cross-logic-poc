// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { createContext, useContext } from "react";
import { useSDK } from "react-sdk";

type sdk = ReturnType<typeof useSDK>;

export const sdkContext = createContext<sdk>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const sdk = useSDK();

  return (
    <sdkContext.Provider value={sdk}>
      <Component {...pageProps} />
    </sdkContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
