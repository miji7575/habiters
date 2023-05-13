import { useState } from 'react';
import { Inputs } from '../../../commons/inputs/Inputs.container';
import styled from '@emotion/styled'
import axios from 'axios';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
import {userState} from '../../../../commons/stores/Stores';


export default function DeleteHabitPopup(props) {

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




    // 함수==================================
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const deleteHabitData = async () => {

        console.log(props.habitId)
        // new Headers({
        //     'Content-Type': 'application/json',
        // });
        if (accessToken) {
            console.log("레이아웃==================시작====")
            console.log("토큰" + accessToken)
            const response = await axios.delete(`http://223.130.162.40:8080/habits/${props.habitId}`, {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
                // .then(function (response) {
                //     console.log(response);
                // })

            // const json = await response.json
            
            console.log(response.data.data)
            
            console.log("레이아웃==================끝   ====")
            return
        }
        console.log(" 레이아웃 토큰없음.")
        // return response.data;
    }
    



    function deleteHabitPopupClose() {
        props.deleteHabitPopupClose();
    }

    const deleteHabit = async () => {
        console.log(props.habitId)
        await deleteHabitData()
        props.deleteHabit();
        console.log("습관 삭제 완료")
        props.getUserData();

    }



    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">정말 삭제하실건가요?</span>
                        <span className="icon-l icon-close-line"
                            onClick={deleteHabitPopupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        <div>
                            <div className="body2-medium">
                                해당 기록은 삭제하시면 복구가 불가능해요!
                            </div>
                        </div>
                    </PopupContent>

                    <PopupBtnContainer>
                        <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={deleteHabit}>예</div>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={deleteHabitPopupClose}>아니요</div>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>


    )

}