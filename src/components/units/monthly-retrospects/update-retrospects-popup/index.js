import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import axios from 'axios';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
import { userState,  TextareaValueState } from '../../../../components/stores';
import Textareas from '../../../commons/textareas/Textareas.container';



// ============================== Style  ==============================
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

export default function UpdateHabitPopup(props) {






    // ============================== Function  ==============================

  

    const placeholder = "오늘의 회고 수정";


    const [textareaInput, setTextareaInput] = useRecoilState(TextareaValueState)

  

    



    useEffect(()=>{
        // console.log(props.retrospectsContent)
        // console.log(textareaInput)
        setTextareaInput(props.retrospectsContent)
    },[])

    const onChangeHandler = (e) => {
        setTextareaInput(e.target.value)
        // console.log(e.target.value)

    }

    // ====================================================================================================================
    // =======================================여기서부터 진짜 ==========================================================
    // ====================================================================================================================
    // --- Axios Update
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const updateUserRetrospectData = async () => {
        // console.log(props.retrospectsId)
        if (accessToken) {
            const response = await axios.put(`https://api.habiters.store/diaries/${props.retrospectsId}`, textareaInput, {

                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
   
            return
        }
    }

    const updateRetrospect = async () => {
        await updateUserRetrospectData()
        await props.getUserRetrospects()
        setTextareaInput('')
        props.updateRetrospectsPopupClose();
        
    }


    function updateRetrospectsPopupClose() {
        props.updateRetrospectsPopupClose();
        setTextareaInput('')
    }

    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">오늘의 회고 수정</span>
                        <span className="icon-l icon-close-line"
                            onClick={updateRetrospectsPopupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        {/* <PopupTextareaBox> */}
                        <Textareas
                        placeholder={placeholder}
                         width={`auto`}
                         height={"272px"}
                         onChangeHandler={onChangeHandler}
                        
                        ></Textareas>


                        {/* </PopupTextareaBox> */}
                    </PopupContent>

                    <PopupBtnContainer>
                        <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={updateRetrospectsPopupClose}>취소하기</div>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={updateRetrospect}>수정완료</div>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>


    )

}