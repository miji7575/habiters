// import type { AppProps } from "next/app";
import Layout from '../components/commons/layout/index';
import { Global } from "@emotion/react";
import GlobalStyles from "../commons/styles/globalStyles"
import { RecoilRoot } from 'recoil';
// import ErrorPage from '../pages/errorpage';


// "src/commons/styles/globalStyles";
// import '../styles/globals.css'
// import '../styles/colors.css'
// // import '../styles/typhography.css'
// import '../styles/layout.css'
import '../styles/icon.css'
import '../styles/button.css'
import '../styles/habit-check.css'
// import '../styles/header.css'
// import '../styles/footer.css'
// import '../styles/util.css'


//  /styles/globals.css'
// import '/styles/header.css'
// import '/styles/typhography.css'



export default function App({ Component, pageProps }) {


  // console.log("App.js")



  return (
    <>
      <title>Habiters</title>
      <GlobalStyles />
      <RecoilRoot>
        <Layout>
          {/* {pageProps.statusCode != 404 && <Component {...pageProps} />} */}
          {/* {pageProps.statusCode == 404 && <ErrorPage/>} */}
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>


    </>
  )
}



App.getInitialProps = async (context) => {

  console.log("서버의 APP getInitialProps")
  // console.log(context.ctx.req.cookies)
  // const token = context.ctx.req.cookies
  // const { ctx, Component } = context;
  // const refreshToken = cookies(ctx).token;
  // console.log(refreshToken)
  // let pageProps = {};
  // let loginData: OauthLoginResponse | null;
  // try {
  //   const response = await AuthApi.REFRESH(refreshToken!);
  //   loginData = response;
  //   ctx.res?.setHeader(
  //     'set-cookie',
  //     `refreshToken=${response.refreshToken}; path=/; max-age=${response.refreshTokenAge}`,
  //   );
  // } catch (err: any) {
  //   loginData = null;
  // }

  // if (Component.getInitialProps) {
  //   // Component의 context로 ctx를 넣어주자
  //   pageProps = await Component.getInitialProps(ctx);
  // }
  // // return한 값은 해당 컴포넌트의 props로 들어가게 됩니다.
  return {
    // props: {
    //   "token" : token
    // }
  }
};
