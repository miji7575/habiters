import { useState } from 'react';
import  Inputs  from '../../../commons/inputs/Inputs.container';
import styled from '@emotion/styled'


export default function UpdateHabitPopup(props) {

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

    const PopupBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    `




    // 함수

    // 기존 저장된 습관 이름을 불러와야함
    const [habitValue, setHabitValue] = useState('')
    const newHabirValue = "약먹기(임시)"
    // setHabitValue(newHabirValue)

    const placeholder = "만드실 습관을 10자 이내로 입력해주세요.";


    function updateHabitPopupClose() {
        props.updateHabitPopupClose();
    }

    function updateHabit() {
        props.updateHabit();
        console.log("습관 수정 완료")
    }



    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">습관 이름 수정</span>
                        <span className="icon-l icon-close-line"
                            onClick={updateHabitPopupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        <div>
                            <Inputs
                                placeholder={placeholder} value={habitValue} />
                        </div>
                    </PopupContent>

                    <PopupBtnContainer>
                        <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={updateHabitPopupClose}>취소하기</div>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={updateHabit}>수정완료</div>
                    </PopupBtnContainer>
                  

                </PopupContainer>
            </PopupBackground>
        </>


    )

}