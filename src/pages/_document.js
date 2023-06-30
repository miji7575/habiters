import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
 
  return (
    <Html lang="en">
      <Head >
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        
          {/* <!-- 제목 설정 --> */}
          <meta name="title" property="og:title" content="Habiters" />

          {/* <!-- 설명문 설정 --> */}
          <meta name="description" property="og:description" content="해빗트래커 기반 습관 성형 커뮤니티" />

          {/* <!-- 이미지 설정 --> */}
          <meta name="image" property="og:image" content="https://habiters.vercel.app/image/habiters_ogImage.png" />

          {/* <!-- URL 설정 --> */}
          <meta name="url" property="og:url" content="habiters.vercel.app" />

          {/* <!-- 언어 설정 --> */}
          <meta property="og:locale" content="ko_KR" />
        

        {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" /> */}
        <link rel="icon" href="/favicon.ico" />



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
