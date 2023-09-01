import styled from '@emotion/styled'
import { useRouter } from "next/router"
import Textarea from "../../components/commons/textareas/Textareas.container"
import axios from 'axios'
import { userAccessToken } from '../../components/stores';
import { useRecoilState } from 'recoil';
import Popup2BtnTextonly from '../../components/commons/popup/Popup2BtnTextonly';
import { useState } from 'react';

// =======================  Style  =======================

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 200px;
`

const Title = styled.div`
padding: 72px 0 32px 0;

    /* headline1 */
font-family: 'Pretendard-Bold'; 
font-size: 40px;
line-height: 52px;
color: var(--color-black1);
`

const SubTitle = styled.div`
padding-bottom: 48px;
    /* headline4 */
font-family: 'Pretendard-Bold'; 
font-size: 24px;
line-height: 32px;
color: var(--color-black2);
`
const DeleteAccountNoticeWrap = styled.div`
width: 580px;
height: 202px;
box-sizing: border-box;
background-color: var(--color-black9);
border-radius: 16px;
padding: 24px 24px;
`
const DeleteAccountNoticeTitle = styled.div`
 /* body1-bold */
  font-family: 'Pretendard-Bold'; 
  font-size: 18px;
  line-height: 26px;
  color: var(--color-black2);

`


const DeleteAccountNotice = styled.div`
display: flex;
flex-direction: column;
padding-top: 16px;
gap: 8px;

/* body2-regular */
font-family: 'Pretendard-Regular'; 
font-size: 16px;
line-height: 24px;
color: var(--color-black2);
`
const Notice = styled.div`
display: flex;
align-items: center;
&::before{
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--color-purple2);
    margin-right: 8px;
    }
`


const NoticeEmail = styled.div`
padding-left: 12px;
`

const DeleteAccountTextarea = styled(Textarea)`
   margin: 24px 0 56px 0;
   width: 580px;
   height: 172px;

`


const DeleteAccountBtn = styled.div`

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

    background-color: var(--color-purple2);
    color: var(--color-white);
    border: 1px solid var(--color-purple2);

    :hover{
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
    }




/* body2-medium */
  font-family: 'Pretendard-Medium'; 
  font-size: 16px;
  line-height: 24px;


`

export default function DeleteAccount() {

    // =======================  Function  =======================


    const router = useRouter()

    const placeholder = "탈퇴 사유를 입력해주세요. (선택적)"
    const textareaErrorMessage = "";


    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const deleteUser = async () => {
        // console.log("?")
        if (accessToken) {

            const response = await axios.delete(`https://api.habiters.store/users/me`,
                {
                    headers: { "Content-Type": 'multipart/form-data', Authorization: 'Bearer ' + accessToken }
                })
            // console.log(response)
            return

        }
    }



    // ----- POPUP

    const popUpTitle = "정말 탈퇴하시겠어요?"
    const popUpFisrtBtnText = "네"
    const popUpSecondBtnText = "아니오"


    const [isDeleteAccountPopUpOn, setIsDeleteAccountPopUpOn] = useState(false)

    const deleteAccountPopUpOn = () => {
        setIsDeleteAccountPopUpOn(true)
    }

    const deleteAccountPopUpClose = () => {
        setIsDeleteAccountPopUpOn(false)
    }

    const onDeleteUserBtnClick = () => {
        // console.log("삭ㅈㅔ됨")
        deleteUser();
        setAccessToken();
        setIsDeleteAccountPopUpOn(false)

        router.push("/")
    }





    return (
        <>
            <main>

                <Main>

                    <Title>HABITERS 탈퇴 안내</Title>
                    <SubTitle>그 동안 HABITERS와 함께한 시간들, 유익하셨나요?</SubTitle>
                    <DeleteAccountNoticeWrap>
                        <DeleteAccountNoticeTitle>‘HABITERS'를 탈퇴하기 전에 확인해주세요. </DeleteAccountNoticeTitle>
                        <DeleteAccountNotice>
                            <Notice>탈퇴가 완료되면 개인정보 및 모든 기록은 즉시 파기되며 복구가 불가해요. </Notice>
                            <Notice>기록을 남기고 싶으시면 탈퇴 전 엑셀 파일을 다운받아 주세요.</Notice>
                            <div>
                                <Notice>추가 문의 사항은 해비터스 개인정보관리팀에 연락주세요.</Notice>
                                <NoticeEmail>weareteamclovers@gmail.com</NoticeEmail>
                            </div>
                        </DeleteAccountNotice>
                    </DeleteAccountNoticeWrap>

                    <Textarea
                        width={`580px`}
                        margin={`24px 0 56px 0`}
                        height={`172px`}
                        placeholder={placeholder}
                        name="deleteUser"
                        textareaErrorMessage={textareaErrorMessage} />

                    <DeleteAccountBtn onClick={deleteAccountPopUpOn}>탈퇴하기</DeleteAccountBtn>

                    {isDeleteAccountPopUpOn && <Popup2BtnTextonly
                        popUpTitle={popUpTitle}
                        popUpFisrtBtnText={popUpFisrtBtnText}
                        popUpSecondBtnText={popUpSecondBtnText}
                        popUpClose={deleteAccountPopUpClose}
                        onFirstBtnClick={onDeleteUserBtnClick}
                        onSecondBtnClick={deleteAccountPopUpClose}
                    />}

                </Main>



            </main>
        </>

    )
}