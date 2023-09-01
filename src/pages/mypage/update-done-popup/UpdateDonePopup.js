import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import axios from 'axios';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
// import {userAccessToken} from '../../../../components/stores';


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
    >span:first-of-type{
        /* headline5 */
    font-family: 'Pretendard-Bold'; 
    font-size: 20px;
    line-height: 28px;
    }
    `

const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    /* body2-medium */
  font-family: 'Pretendard-Medium'; 
  font-size: 16px;
  line-height: 24px;
    `

const PopupBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    `

const BtnLarge = styled.div`

display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
border: 1px solid var(--color-purple2);
text-align: center;
transition: all .3s;
cursor: pointer;

width: 380px;
height: 48px;
box-sizing: border-box;
padding: 12px 16px 12px 16px;

/* body2-medium */
font-family: 'Pretendard-Medium'; 
font-size: 16px;
line-height: 24px;

:hover {
box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
}

`

const BtnLargePrimary = styled(BtnLarge)`
background-color: var(--color-purple2);
color: var(--color-white);
border: 1px solid var(--color-purple2);
`

export default function UpdateDonePopup(props) {








    // ============================== Function  ==============================

    function popupClose() {
        props.updateDonePopupClose();
    }

    const [popUpTitle, setPopupTitle] = useState('')
    const [popUpMessage, setPopupMessage] = useState('')
    useEffect(() => {
        setPopupTitle(props.popUp.summary)
        setPopupMessage(props.popUp.content)

    }, [props.popUp])




    return (


        <>


            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        {/* <span className="headline5">{props.popUp.messageTitle}</span> */}
                        <span>{popUpTitle}</span>
                        <span className="icon-l icon-close-line"
                            onClick={popupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        <div>
                            {/* <div className="body2-medium">
                            {props.popUp.content}
                            </div> */}
                            <div>
                                {popUpMessage}
                            </div>
                        </div>
                    </PopupContent>

                    <PopupBtnContainer>
                        {/* <div className="btn btn-large btn-secondary-default body2-medium"
                            onClick={popupClose}>예</div> */}
                        <BtnLargePrimary onClick={popupClose}>확인</BtnLargePrimary>
                    </PopupBtnContainer>


                </PopupContainer>
            </PopupBackground>
        </>


    )

}