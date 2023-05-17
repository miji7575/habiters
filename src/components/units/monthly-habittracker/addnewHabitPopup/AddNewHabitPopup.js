import { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled'
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, InputValue } from '../../../../commons/stores/Stores';
import Input from '../../../commons/inputs/Inputs.container';


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

export default function AddNewHabitPopup(props) {

    // ============================== Function  ==============================



    // ----- axios(post) -- 습관이름 등록하기
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const postHabit = async () => {
        if (accessToken) {
            const response = await axios.post('https://api.habiters.store/habits', {
                "content": newInput["habitName"]
            }, {
                headers: { "Content-Type": "application/json", Authorization: `Bearer ` + accessToken },
            })
            return
        }

    }


    // ----- 습관 등록하기
    const addNewhabit = async () => {


        if ( !newInput["habitName"]  || newInput["habitName"].trim().length == 0 ) {
            alert("내용을 입력해주세요");
            return
        }
        if (newInput["habitName"].length > 10) {
            alert("습관 이름은 10자 이내만 가능합니다")
            return
        }
        else {
            await postHabit()
            setNewInput(() => '')
            props.getUserData();
            props.addNewHabitPopupClose();
            return
        }
    }



    // ----- input
    const placeholder = "만드실 습관을 10자 이내로 입력해주세요.";
    const [newInput, setNewInput] = useRecoilState(InputValue)
    const { habitName } = newInput;




    const onChange = (e) => {
        const { value, name } = e.target;
        setNewInput({ ...newInput, [name]: value })
    };


// ----- 팝업창 닫기
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
                        {/* <Inputs
                            placeholder={placeholder}
                            onChangeHandler={onChangeHandler}
                        /> */}
                        <Input
                            name="habitName"
                            value={habitName}
                            placeholder={placeholder}
                            onChange={onChange}
                           
                        />

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