import styled from '@emotion/styled'
import { useEffect, useState } from 'react'



const CheckBoxDefaultWrap = styled.div`
    
        display: flex;
        gap: 16px;
        align-items: center;
        width: max-content;

       

    `

const CheckBoxDefaultCheckBox = styled.span`

    min-width: 24px;
    min-height: 24px;
    box-sizing: border-box;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    
   

     /* Disabled 상태일 때  /  아닐 때 */
     ${props => props.isDisabled ? `
        background-color: var(--color-black7);
     ` : `
        cursor: pointer;
        border : 1px solid var(--color-black4);
     `}

     /* 체크됐을 때 */
    ${props => props.isCheckBoxChecked ? `
        background-color : var(--color-purple2);
        border : none;
        ` : `
        `}
        
    

    >span{
        
        width: 20px;
        height: 20px;

       -webkit-mask-size: 20px 20px;
       -webkit-mask-image: url(/image/icon/icon-check.svg);
       -webkit-mask-repeat: no-repeat;
      
       
        ${props => props.isCheckBoxChecked ? ` background-color: var(--color-white);
        `: ` background-color: var(--color-black4);`}

    }
   
   

    `

const CheckBoxDefaultLabel = styled.div`
        display: inline-flex;
        font-family: 'Pretendard-Medium'; 
        font-size: 16px;
        line-height: 24px;


        /* Disabled 상태일 때  */
        ${props => props.isDisabled ? `color : var(--color-black4);` : `color : var(--color-black2);`}

    `






export function CheckBoxDefault(props) {

    // ----- prop으로 전달될 수 있는 값
    const [isDisabled, setIsDisabled] = useState(props.isDisabled)
    const [checkBoxValue, setCheckBoxValue] = useState("체크박스의 값")


    // ----- SelectBox 내부 값
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false)


    useEffect(() => {
        // console.log(isCheckBoxChecked)
        setCheckBoxValue(props.checkBoxValue)
    })



    return (

        <>

            <CheckBoxDefaultWrap>

                {/* 체크박스 */}
                <CheckBoxDefaultCheckBox
                    isDisabled={isDisabled}
                    isCheckBoxChecked={isCheckBoxChecked}
                    onClick={e => {if(!isDisabled){setIsCheckBoxChecked(!isCheckBoxChecked), props.onClickEvent()}}}
                >
                    <span></span>
                </CheckBoxDefaultCheckBox>



                {/* 체크박스 라벨 */}
                <CheckBoxDefaultLabel
                    isDisabled={isDisabled}
                >
                    {checkBoxValue}
                </CheckBoxDefaultLabel>



            </CheckBoxDefaultWrap>


        </>
    )




}