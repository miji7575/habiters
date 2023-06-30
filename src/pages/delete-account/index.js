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
`

const SubTitle = styled.div`
padding-bottom: 48px;
`
const DeleteAccountNoticeWrap = styled.div`
width: 580px;
height: 202px;
box-sizing: border-box;
background-color: var(--color-black9);
border-radius: 16px;
padding: 24px 24px;
`

const DeleteAccountNotice = styled.div`
display: flex;
flex-direction: column;
padding-top: 16px;
gap: 8px;
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

export default function DeleteAccount() {

    // =======================  Function  =======================


    const router = useRouter()

    const placeholder = "탈퇴 사유를 입력해주세요. (선택적)"
    const textareaErrorMessage = "";


    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const deleteUser = async () => {
        console.log("?")
        if (accessToken) {

            const response = await axios.delete(`https://api.habiters.store/users/me`,
                {
                    headers: { "Content-Type": 'multipart/form-data', Authorization: 'Bearer ' + accessToken }
                })
            console.log(response)
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
        console.log("삭ㅈㅔ됨")
        deleteUser();
        setAccessToken();
        setIsDeleteAccountPopUpOn(false)

        router.push("/")
    }





    return (
        <>
            <main>

                <Main>

                    <Title className={'headline1 color-black1'}>HABITERS 탈퇴 안내</Title>
                    <SubTitle className={'headline4 color-black2'}>그 동안 HABITERS와 함께한 시간들, 유익하셨나요?</SubTitle>
                    <DeleteAccountNoticeWrap>
                        <div className={'body1-bold color-black2'}>‘HABITERS'를 탈퇴하기 전에 확인해주세요. </div>
                        <DeleteAccountNotice className={'body2-regular color-black2'}>
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
                        textareaErrorMessage={textareaErrorMessage} />

                    <div className={'btn btn-large btn-primary-default body2-medium'} onClick={deleteAccountPopUpOn}>탈퇴하기</div>


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