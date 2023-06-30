import styled from "styled-components"
import Textareas from '../textareas/Textareas.container';

const PopupBackground = styled.div`
 position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 0;
background: rgba(0, 0, 0, 0.8);
`

const PopupContainer = styled.div`
width: 428px;
box-sizing: border-box;
padding: 40px 24px 40px 24px;
border-radius: 24px;
background-color: var(--color-white);
display: flex;
flex-direction: column;
/* box-shadow: 3px 3px 3px 3px black; */

position: absolute;
top: calc(50vh - (504px / 2));
left: calc(50vw - (428px / 2));
height: 504px;
`

const PopupTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
margin-bottom: 24px;
color: var(--color-black1);
`


const PopupTextareaBox = styled.div`
 width: auto;
`




const PopupContent = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin-bottom: 32px;
`

const PopupBtnContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap: 8px;
`

export default function Popup2BtnTextarea(props) {

    // --- 사용됨
    // popUpTitle = 제목
    // popUpClose = 팝업창 닫기
    // onFirstBtnClick = 첫번째 버튼 클릭 시 실행할 함수
    // onSecondBtnClick = 두번째 버튼 클릭 시 실행할 함수

    // -- Textarea Component
    // inputName = Textarea의 name 
    // value= Textarea의 value
    // placeholder= Textarea의 placeholder
    // onChange = Textarea의 onChange
    // isError = Textarea의 isError State(true/false)
    // errorMessage= Textarea의 errorMessage

    // --- 사용X
    // popUpSubTitle = 소제목(설명) 


    return (
        <>
            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">{props.popUpTitle}</span>
                        <span className="icon-l icon-close-line"
                            onClick={props.popUpClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        {/* <PopupTextareaBox> */}
                        <Textareas
                            placeholder={props.placeholder}
                            width={`auto`}
                            height={"272px"}
                            // onChangeHandler={props.onChange}
                            name={props.name}
                            value={props.value}
                        ></Textareas>


                        {/* </PopupTextareaBox> */}
                    </PopupContent>

                    <PopupBtnContainer>
                        <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={props.onFirstBtnClick}>{props.popUpFisrtBtnText}</div>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={props.onSecondBtnClick}>{props.popUpSecondBtnText}</div>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>
    )
}