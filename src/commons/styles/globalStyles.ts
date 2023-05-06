import { css } from "@emotion/react"

export const globalStyles = css`
    *{
        margin: 0;
        box-sizing: border box;
    }

    @font-face { 
        font-family: 'Pretendard-Bold'; 
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff'); 
        font-weight: bold; 
        font-style: normal; 
      }
      
      @font-face { 
        font-family: 'Pretendard-Medium'; 
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff'); 
        font-weight: 500; 
        font-style: normal; 
      }
      
      @font-face { 
        font-family: 'Pretendard-Regular'; 
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff'); 
        font-weight: 400; 
        font-style: normal; 
      }
`