import { useState } from 'react';
import styled from '@emotion/styled'
import axios from 'axios';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
import {userState} from '../../../../components/stores';


export default function DeleteRetrospectsPopup(props) {

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
    /* box-shadow: 3px 3px 3px 3px black; */

    position: absolute;
    top: calc(50vh - (240px / 2));
    left: calc(50vw - (428px / 2));
    `

    const PopupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    color: var(--color-black1);
    `

    const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    color: var(--color-black2);
    `

    const PopupBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    `





    
    const [accessToken, setAccessToken] = useRecoilState(userState)


    // --- Axios Delete  -- (회고 삭제)
    const deleteUserRetrospectData = async () => {
        if (accessToken) {
            const response = await axios.delete(`https://api.habiters.store/diaries/${props.retrospectsId}`, {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            return
        }
    }





    //   ---- 회고 삭제
    const deleteRetrospect = async () => {
        await deleteUserRetrospectData();
        await props.getUserRetrospects();
        props.deleteRetrospects()
        props.deleteRetrospectsPopupClose();
    }



   

    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">정말 삭제하실건가요?</span>
                        <span className="icon-l icon-close-line"
                            onClick={props.deleteRetrospectsPopupClose}></span>
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
                            onClick={deleteRetrospect}>예</div>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={props.deleteRetrospectsPopupClose}>아니요</div>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>


    )

}