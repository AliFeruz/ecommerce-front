import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle/>
    <Component {...pageProps} />;
    </>
  )
}
