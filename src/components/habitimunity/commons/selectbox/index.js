import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import {SelectBoxValueState} from '../../../stores/index';
import { useRecoilState } from 'recoil';



// 2023/07/30/박미지  -------------------------------------  SelectBoxDefault


// =====  사용법
// "SelectBoxDefault" 라는 이름으로 import 해서 사용
// 받아올 옵션의 데이터 : 사용하는 곳에서 "options" 라는 이름으로 전달.
// width 변경하기 : SelectBoxDefaultWrap 안의 width 속성에 prop 전달(단위까지 기재) 기본값 380px
// Medium SelectBox 사용시에만 type={ "medium" }으로 전달




// --------------------애니메이션 시간되면 넣기
const slideFadeIn = keyframes`

    0% {
        transform: translateY(-100%);
      }
    
      100% {
        transform: translateY(0);
      }

`

const slideFadeOut = keyframes`

    0% {
       transform: translateY(0);
     }
     100% {
       transform: translateY(-100%);
     }

`








const SelectBoxDefaultWrap = styled.div`

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

const SelectBoxDefaultSelectBox = styled.div`

     /* size */
    height: ${(props) => props.type == "medium" ? `32px` : `48px`};
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

const SelectBoxDefaultOptionsWrap = styled.div`

    z-index: 1;

    /* 애니메이션 */
    /* animation: ${slideFadeIn} .5s ; */
    /* overflow: hidden; */


    width: ${(props) => props.width ? props.width : `380px`};
    border : 1px solid var(--color-black7);
    border-radius: 8px;
    position: absolute;
    /* bottom : 8px; */
    top: ${(props) => props.type == "medium" ? `40px` : `56px`};
    /* display: flex;
    flex-direction:column; */
`
const SelectBoxDefaultOption = styled.div`

    /* size */
    min-height: ${(props) => props.type == "medium" ? `32px` : `48px`};
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
const ErrorMessage = styled.div`
    color : var(--color-error);
    font-family: 'Pretendard-Regular'; 
    font-size: 12px;
    line-height: 16px;
`




export function SelectBoxDefault(props) {


    // ----- prop으로 전달될 수 있는 값
    const [placeholder, setPlaceholder] = useState('')
    const [isFocused, setisFocused] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [type, setType] = useState(props.type)
    const [width, setWidth] = useState(props.width)
    const [errorMessage, setErrorMessage] = useState('에러메세지');
    const [selectedValue, setSelectedValue] = useRecoilState(SelectBoxValueState);
    // const width = props.width


    // ----- SelectBox 내부 값
    const [isValueNull, setIsValueNull] = useState(true)

    // 2023/07/30/박미지 ----- 초기값 설정
    useEffect(() => {
        setPlaceholder(()=> props.placeholder ? props.placeholder : "값을 입력해주세요")
        setSelectedValue(()=> props.placeholder ? props.placeholder : "값을 입력해주세요")
        setErrorMessage(() => props.errorMessage ? props.errorMessage : "값을 확인해주세요")
    }, [props.placeholder,props.errorMessage])


    useEffect(() => {
        selectBoxValueNullCheck()
    }, [selectedValue])



    // 2023/07/30/박미지  ----- SelectBox 컴포넌트에 선택된 값이 있는지 확인 
    const selectBoxValueNullCheck = () => {
        if (selectedValue !== placeholder) {
            setIsValueNull(false)
        }
    }



    // 콘솔용
    useEffect(() => {
        setIsError(props.isError)
        setIsDisabled(props.isDisabled)
    })



    // ------------------------Test용도
    // const SelectBox = (props) => {
    //     return (
    //         <>
    //             <SelectBoxDefaultWrap
    //                 width={props.width}>

    //                 {/* SelectBox */}
    //                 <SelectBoxDefaultSelectBox
    //                     onClick={e => { if (!isDisabled) { setisFocused(!isFocused) } }}
    //                     isFocused={isFocused}
    //                     isDisabled={isDisabled}
    //                     isError={isError}
    //                     type={type}
    //                 >
    //                     {selectedValue}
    //                 </SelectBoxDefaultSelectBox>


    //                 {/* Dropdown */}
    //                 {isFocused &&
    //                     <SelectBoxDefaultOptionsWrap>
    //                         {props.options.map((option) => (

    //                             <SelectBoxDefaultOption
    //                                 type={type}
    //                                 key={option.value}
    //                                 value={option.value}
    //                                 onClick={e => { setSelectedValue(option.name), setisFocused(!isFocused) }}>
    //                                 {option.name}

    //                             </SelectBoxDefaultOption>
    //                         ))}
    //                     </SelectBoxDefaultOptionsWrap>}

    //                 {isError && <ErrorMessage>에러메세지</ErrorMessage>}
    //             </SelectBoxDefaultWrap>
    //         </>

    //     );
    // };


    return (
        <>

            {/* <SelectBox
                options={OPTIONS}
            /> */}

            <SelectBoxDefaultWrap
                width={width}>



                {/* SelectBox */}
                <SelectBoxDefaultSelectBox
                    onClick={e => { if (!isDisabled) { setisFocused(!isFocused) } }}
                    isFocused={isFocused}
                    isDisabled={isDisabled}
                    isError={isError}
                    type={type}
                    isValueNull={isValueNull}
                >
                    <div>
                        {selectedValue}
                    </div>
                </SelectBoxDefaultSelectBox>



                {/* Dropdown */}
                {isFocused &&
                    <SelectBoxDefaultOptionsWrap
                        type={type}
                        width={width}
                    >


                        {props.options.map((option) => (

                            <SelectBoxDefaultOption
                                key={option.value}
                                value={option.value}
                                type={type} //Large, Medium 정의
                                // 선택된 값과 OPTION의 name 비교(selectedValue, name)
                                selectedValue={selectedValue}
                                name={option.name}
                                onClick={e => { setSelectedValue(option.name), setisFocused(!isFocused) }}>
                                {option.name}

                            </SelectBoxDefaultOption>
                        ))}


                    </SelectBoxDefaultOptionsWrap>}



                {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}



            </SelectBoxDefaultWrap>

        </>
    )
}



