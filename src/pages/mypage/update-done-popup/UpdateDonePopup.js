import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import axios from 'axios';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
// import {userState} from '../../../../components/stores';


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
    left: calc(50vw - (428px / 2));
    top: calc(50vh - (240px / 2));
    
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


export default function UpdateDonePopup(props) {



   




    // ============================== Function  ==============================

    function popupClose() {
        props.updateDonePopupClose();
    }

    const [popUpTitle, setPopupTitle ] = useState(props.popUp.messageTitle)
    const [popUpMessage, setPopupMessage ] = useState(props.popUp.content)
    useEffect(()=>{
        setPopupTitle(props.popUp.messageTitle)
        setPopupMessage(props.popUp.content)
        console.log("Sdf")
    },[props.popUp])
   



    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        {/* <span className="headline5">{props.popUp.messageTitle}</span> */}
                        <span className="headline5">{popUpTitle}</span>
                        <span className="icon-l icon-close-line"
                            onClick={popupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        <div>
                            {/* <div className="body2-medium">
                            {props.popUp.content}
                            </div> */}
                            <div className="body2-medium">
                            {popUpMessage}
                            </div>
                        </div>
                    </PopupContent>

                    <PopupBtnContainer>
                        {/* <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={popupClose}>예</div> */}
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={popupClose}>확인</div>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>


    )

}