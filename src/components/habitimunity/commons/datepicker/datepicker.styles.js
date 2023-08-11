import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'





// --------------------애니메이션 시간되면 넣기
export const slideFadeIn = keyframes`

    0% {
        transform: translateY(-100%);
      }
    
      100% {
        transform: translateY(0);
      }

`

export const slideFadeOut = keyframes`

    0% {
       transform: translateY(0);
     }
     100% {
       transform: translateY(-100%);
     }

`








export const SelectBoxDefaultWrap = styled.div`

    /* size */
    width: ${(props) => props.width ? props.width : `380px`};
    box-sizing: border-box;

    /* display */
    display: inline-flex;
    flex-direction: column;
    gap: 8px;
    position : relative;
    cursor: pointer;
`

export const SelectBoxDefaultSelectBox = styled.div`

     /* size */
    height: ${(props) => props.size == "medium" ? `32px` : `48px`};
    box-sizing: border-box;
    padding: 12px 36px 12px 12px;

    /* display */
    display: flex;
    align-items: center;
    position: relative;

    /* font */
    font-family: 'Pretendard-Medium'; 
    font-size: 14px;
    line-height: 20px;
    /* color:var(--color-black4); */
    ${props => props.isValueNull ? `color:var(--color-black4);` : `color:var(--color-black2);`}

     /* design */
    border-radius: 8px ;
    background-color: transparent;

     /* 에러일 때 , 기본상태,  포커스상태*/
    ${(props) => props.isError ? `border:1px solid var(--color-error); ` : props.isFocused ? `border: 1px solid var(--color-black4);` : `border: 1px solid var(--color-black7);`}

    
        /* 비활성화일 때 */
    ${(props) => props.isDisabled ? `background-color : var(--color-black8);` : ``}

        
    >div{
        /* 텍스트 초과시 ...로 대체 */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    /* 드롭다운 화살표 이미지 */
    ::after{
        content: '';
        position: absolute;
        right: 12px;
        width: 24px;
        height: 24px;
        -webkit-mask-size:  24px 24px;
        -webkit-mask-image: url(/image/icon/icon-arrow-down.svg);
        -webkit-mask-repeat: no-repeat;


        /* 활성화 상태 */
        ${props => props.isFocused ? `background-color: var(--color-black2); `
        : ` background-color: var(--color-black4); `}


        /* 값이 선택되기 전/후 */
        ${props => props.isValueNull ? `background-color: var(--color-black4); `
        : ` background-color: var(--color-black2); `}
    }

    /* 클릭시 화살표 회전*/
    ${(props) => props.isFocused ? `
       
        ::after{
        transform: rotate(0.5turn);
    }
    `: ``}

`


//--- 옵션부분

export const SelectBoxDefaultOptionsWrap = styled.div`

    z-index: 1;

    /* 애니메이션 */
    /* animation: ${slideFadeIn} .5s ; */
    /* overflow: hidden; */


    width: ${(props) => props.width ? props.width : `380px`};
    border : 1px solid var(--color-black7);
    border-radius: 8px;
    position: absolute;
    /* bottom : 8px; */
    top: ${(props) => props.size == "medium" ? `40px` : `56px`};
    /* display: flex;
    flex-direction:column; */
`
export const SelectBoxDefaultOption = styled.div`

    /* size */
    min-height: ${(props) => props.size == "medium" ? `32px` : `48px`};
    box-sizing: border-box;
    padding:  12px;


    /* design */
    display: flex;  
    align-items: center;
    background-color: var(--color-white);
 


    /* font */
    color: var(--color-black2);
    font-size: 14px;
    ${props => props.selectedValue === props.name ? `
            // body3-bold
            font-family: 'Pretendard-Bold';  `: `
            // body3-regular
            font-family: 'Pretendard-Regular'; 
    `}

    
   
    /* 옵션 내용이 길어지지 않는다면 주석 풀어도 됨. */
    /* 텍스트 초과시 ...로 대체 */
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    /* text-overflow: clip; */
   
    :hover{
        background-color: var(--color-purple5);
    }
    :first-of-type{
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
     
    }
    :last-of-type{
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`

//-- 에러메세지
export const ErrorMessage = styled.div`
    color : var(--color-error);
    font-family: 'Pretendard-Regular'; 
    font-size: 12px;
    line-height: 16px;
`




// --------------TIMEPICKER 전용
// ===========================================================


export const SelectBoxTimePickerOptionWrap = styled.div`

    z-index: 1;

    /* 애니메이션 */
    /* animation: ${slideFadeIn} .5s ; */
    /* overflow: hidden; */

    background-color:var(--color-white);
    /* width: ${(props) => props.width ? props.width : `170px`}; */
    width : 170px;
   
    border-radius: 8px;
    box-sizing : border-box;

    position: absolute;
    ${(props)=> (props.size === "medium"  && props.clickedY > '600'  )  ? `bottom: 40px;` : ``}
    ${(props)=> (props.size === "medium"  && props.clickedY < '600'  )  ? `top: 40px;` : ``}
    ${(props)=> (props.size !== "medium"  && props.clickedY > '600'  )  ? `bottom: 56px;` : ``}
    ${(props)=> (props.size !== "medium"  && props.clickedY < '600'  )  ? `top: 56px;` : ``}
    
    

    /* top: ${(props) => props.size == "medium" ? `40px` : `56px`};  */

    display: flex;
    justify-content:center;
    




    > div:first-of-type{
        border-top : 1px solid var(--color-black7);
        border-left : 1px solid var(--color-black7);
        border-bottom : 1px solid var(--color-black7);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    > div:nth-of-type(2){
        border : 1px solid var(--color-black7);
    }
    > div:last-of-type{
        border-top : 1px solid var(--color-black7);
        border-right : 1px solid var(--color-black7);
        border-bottom : 1px solid var(--color-black7);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    > div:first-of-type > div:first-of-type {
        border-top-left-radius: 8px;
    }
    > div:last-of-type > div:first-of-type {
        border-top-right-radius: 8px;
    }
    > div:last-of-type > div:last-of-type {
        border-bottom-right-radius: 8px;
    }
   

`



export const SelectBoxTimePickerOption = styled.div`

    /* size */
    width: 56px;
    min-height: ${(props) => props.size == "medium" ? `40px` : `40px`};
    box-sizing: border-box;
    padding:  12px;


    /* design */
    display: flex;  
    align-items: center;
    justify-content: center;
 


    /* font */
   
    font-size: 14px;
    ${props => props.selectedValue === props.name ? `
            // body3-bold
            font-family: 'Pretendard-Bold'; 
            color: var(--color-purple2); `: `
            // body3-regular
            font-family: 'Pretendard-Regular';
            color: var(--color-black2);
            
             
    `}



    /* 옵션 내용이 길어지지 않는다면 주석 풀어도 됨. */
    /* 텍스트 초과시 ...로 대체 */
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    /* text-overflow: clip; */
   
    :hover{
        background-color: var(--color-purple5);
    }
    :first-of-type{
        /* border-top-right-radius: 8px;
        border-top-left-radius: 8px; */
     
    }
    :last-of-type{
        /* border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px; */
    }
`















