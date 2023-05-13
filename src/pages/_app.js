// import type { AppProps } from "next/app";
import Layout from '../components/commons/layout/index';
import { Global } from "@emotion/react";
// import { GlobalStyles } from "../src/commons/styles/globalStyles"
import { RecoilRoot, useRecoilState, atom } from 'recoil';
import { userState } from '../commons/stores/Stores';
// "src/commons/styles/globalStyles";
import '../styles/globals.css'
import '../styles/colors.css'
import '../styles/typhography.css'
import '../styles/layout.css'
import '../styles/icon.css'
import '../styles/button.css'
import '../styles/habit-check.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/util.css'


//  /styles/globals.css'
// import '/styles/header.css'
// import '/styles/typhography.css'



export default function App({ Component, pageProps }) {






  return (
    <>










      {/* <Global styles={ GlobalStyles }> */}
      <RecoilRoot>
        <head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
      {/* </Global> */}

    </>
  )
}
