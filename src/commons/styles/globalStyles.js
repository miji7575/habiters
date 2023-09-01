import { createGlobalStyle } from 'styled-components';
// import PretendardBold from '../../assets/font/Pretendard-Bold.woff2';
// // import PretendardMedium from '../../assets/font/Pretendard-Medium.woff2';
// // import PretendardRegular from '../../assets/font/Pretendard-Regular.woff2';


const GlobalStyle = createGlobalStyle`
html{
  /* font-family: 'Pretendard-Regular';  */
}
:root{
    /* header */
--header-height: 90px;


/* toggle */
--radious: 32px;
--toggle-width : 500px;
--toggle-height: 60px;

--tab-width : 500px;
--tab-height: 60px;


/* color */
  --color-purple1 : #6F50ED;
  --color-purple2 : #937CF1;
  --color-purple3 : #BBACF6;
  --color-purple4 : #E1DAFB;
  --color-purple5 : #F4F1FE;

  --color-skyblue1 : #26A9F2;
  --color-skyblue2 : #57BCF5;
  --color-skyblue3 : #87CFF8;
  --color-skyblue4 : #B7E2FB;
  --color-skyblue5 : #E7F5FE;
  
  --color-green1 : #1BBB9E;
  --color-green2 : #29E0BF;
  --color-green3 : #67E9D2;
  --color-green4 : #A6F2E4;
  --color-green5 : #E4FBF7;

  --color-black1: #121212;
  --color-black2: #333333;
  --color-black3: #555555;
  --color-black4: #888888;
  --color-black5: #A6A6A6;
  --color-black6: #CCCCCC;
  --color-black7: #DBDBDB;
  --color-black8: #EDEDED;
  --color-black9: #F4F4F4;
  --color-black10: #F8F8F8;

  --color-white : #FFFFFF;


  --color-error: #EA3838;
  --color-info: #387FEA;
  --color-success: #1CCC78;
  --color-warning: #F99A2A;

  /* icon-size */
  --icon-size-xs: 12px;
  --icon-size-s: 16px;
  --icon-size-m: 24px;
  --icon-size-l: 32px;
  --icon-size-xl: 48px;
  
  --icon-round-l: 32px;
  --icon-round-m: 24px;
}

// /* *{
//          margin: 0;
//          box-sizing: border box;
//      } */


   
/* @font-face { 
  font-family: 'Pretendard-Bold'; 
  src: url('src/assets/font/Pretendard-Bold.woff2') format('woff2');
  font-weight: 700; 
  font-style: normal; 
  font-display : swap;
}

@font-face { 
  font-family: 'Pretendard-Medium'; 
  src: url('../assets/font/Pretendard-Medium.woff2') format('woff2');
  font-weight: 500; 
  font-style: normal; 
  font-display : swap;
}

@font-face { 

  font-family: 'Pretendard-Regular';
  src: url('../assets/font/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal; 
  font-display : swap;
} */


@font-face { 
  font-family: 'Pretendard-Bold'; 
  font-weight: 700; 
  font-display : swap;
  font-style: normal; 
  src:url('/font/Pretendard-Bold.subset.woff2'), url('/font/Pretendard-Bold.woff2') format('woff2');
}

@font-face { 
  font-family: 'Pretendard-Medium'; 
  font-weight: 500; 
  font-display : swap;
  font-style: normal; 
  src: url('/font/Pretendard-Medium.subset.woff2'),url('/font/Pretendard-Medium.woff2') format('woff2');
}

@font-face { 
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  font-style: normal; 
  font-display : swap;
  src:  url('/font/Pretendard-Regular.subset.woff2'), url('/font/Pretendard-Regular.woff2') format('woff2');
}
   `


export default GlobalStyle;