import { useState, useRef, useEffect, useCallback } from 'react';
import Inputs from '../../../commons/inputs/Inputs.container';
import styled from '@emotion/styled'
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, newInputValueState } from '../../../../commons/stores/Stores';
// import inputStyles from '../../../../styles/input.module.css'


// ============================== Style  ==============================
// --- 모달
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
    box-shadow: 3px 3px 3px 3px black;

    position: absolute;
    top: calc(50vh - (428px / 2));
    left: calc(50vw - (240px / 2));
    `

const PopupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    
    `

const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    `

const PopupBtn = styled.div`
    display: flex;
    justify-content: center;
    `
// ----- 인풋
// const InputWrap = styled.div`
//         display: inline-flex;
//         flex-direction: column;
// `

// const InputBox = styled.div`
//         display: inline-flex;
//         align-items: center;
//         position: relative;
// `

// const Input = styled.input`
// padding: 0 48px 0 12px;     
// height: var(--header-height);
// width: ${(props) => props.width || `380px`};
// height: 48px;
// box-sizing: border-box;
// border: ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `solid 1px var(--color-black7)`};
// border-radius: 8px;
// color: var(--color-black2);
// &:focus{
//     outline: ${(props) => props.isError === true ? `var(--color-red)` : `auto`};
// }
// `


// const InputMessage = styled.div`

// `

// const ErrorIcon = styled.span`
// background-color: var(--color-error);
// position: absolute;
// right: 12px;

// `
export default function AddNewHabitPopup(props) {






    // ============================== Function  ==============================

    // ----- axios

    const [accessToken, setAccessToken] = useRecoilState(userState)
    const postHabit = async () => {

        console.log("PostHabit 함수 토큰 : " + accessToken)

        if (accessToken) {

            console.log("PostHabit 함수 newInput : " + newInput)


            const response = await axios.post('https://api.habiters.store/habits', newInput, {
                headers: { "Content-Type": "application/json", Authorization: `Bearer ` + accessToken },
            })
            console.log("PostHabit 의 Response : " + response.data)

            return
        }

    }


    const addNewhabit = async () => {
        if (newInput.trim().length == 0) {
            alert("내용을 입력해주세요")
        }
        else {
            props.addNewhabit();
            setNewInput(() => '')
            await postHabit()
            props.getUserData();
        }
    }



    // ----- input
    const placeholder = "만드실 습관을 10자 이내로 입력해주세요.";
    const [newInput, setNewInput] = useRecoilState(newInputValueState)
    // const [newInput, setNewInput] = useState('')

    const onChangeHandler = (e) => {
        setNewInput(e.target.value)
    };



    function addNewHabitPopupClose() {
        setNewInput('')
        props.addNewHabitPopupClose();
    }








    return (



        <PopupBackground>
            <PopupContainer>

                <PopupTitle>
                    <span className="headline5">새로운 습관 만들기</span>
                    <span className="icon-l icon-close-line"
                        onClick={addNewHabitPopupClose}></span>
                </PopupTitle>

                <PopupContent>
                    <div>
                        <Inputs
                            placeholder={placeholder}
                            onChangeHandler={onChangeHandler}

                        />

                        {/* <InputWrap>

                            <InputBox>
                                {!props.isError &&
                                    <span
                                        className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}
                                        onClick={removeValue} />}
                                <Input
                                    type="text"
                                    className={'input-default body3-medium color-black2'}
                                    width={props.width}
                                    // isError={props.isError}
                                    onChange={onChangeHandler}
                                    value={newInput}
                                    placeholder={placeholder}


                                />



                                {props.isError &&
                                    <ErrorIcon
                                        className="icon-m icon-error-colored" />}
                            </InputBox>
                            <InputMessage id="name" className={'caption1-regular ${props.MessageColor}'}>{props.Message}</InputMessage>
                        </InputWrap> */}


                    </div>

                </PopupContent>


                <PopupBtn>
                    <div className="btn btn-large btn-primary-default body2-medium"
                        onClick={addNewhabit}>습관 만들기</div>
                </PopupBtn>

            </PopupContainer>
        </PopupBackground>


    )

}