import { useState, useRef, useEffect, useCallback } from 'react';
import Inputs  from '../../../commons/inputs/Inputs.container';
import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue } from 'recoil';
import { newInputValueState } from '../../../../commons/stores/Stores';



export default function AddNewHabitPopup(props) {


    // 스타일
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




    // 함수

    const placeholder = "만드실 습관을 10자 이내로 입력해주세요.";
    const [newInput, setNewInput] = useRecoilState(newInputValueState)


    function addNewHabitPopupClose() {
        props.addNewHabitPopupClose();
    }


    function addNewhabit() {
        props.addNewhabit(newInput);
        setNewInput(()=>'')
    }



     useEffect(() => {
        console.log(newInput)
    }, [newInput])


    const onChangeHandler = (event) => {
        setNewInput(() => event.target.value);
        console.log(newInput)
    };

    const removeValue = () => {
        setNewInput('')
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
                       newInput={newInput}
                       removeValue={removeValue}
                       />


                    </div>
                    {/* ============================================== */}
                    {/* <div>{newInput} : HabitAddPopup</div> */}
                    {/* ============================================== */}
                </PopupContent>


                <PopupBtn>
                    <div className="btn btn-large btn-primary-default body2-medium"
                        onClick={addNewhabit}>습관 만들기</div>
                </PopupBtn>

            </PopupContainer>
        </PopupBackground>


    )

}