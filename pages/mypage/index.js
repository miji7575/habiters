import styled from '@emotion/styled'
import { useRouter } from "next/router"
import  Inputs  from "../../src/components/commons/inputs/Inputs.container"

export default function MyPage() {

    // -----------------스타일

    const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
    `

    const Title = styled.div`
     padding: 72px 0 58px 0 ;
    `

    const MyImgWrap = styled.div`
    position: relative;
    `
    const MyImg = styled.img`
     width: 130px;
    height: 130px;
    object-fit: none;
    box-sizing: border-box;
    border: 1px solid var(--color-black7);
    border-radius: 75px;
    `
    const MyImgUpdateIcon = styled.span`
    position: absolute;
    background-color: var(--color-white);
    bottom: 5px;
    left: 98px;
    `

    const MypageInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 56px;
    padding-top: 40px;
    `
    const MypageInputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    `

    const NickNameInputBox = styled.div`
     display: flex;
    width: 380px;
    `

    const NickNameUpdateBtn = styled.div`
        margin-left: 8px;
        width: 80px;
    
    `


    //---------함수---------------------
    const router = useRouter()
    const onClickUpdateImg = () => {
        //    이미지 로드
        alert("파일로드창!")
    }
    const onClickMoveDeleteAccount = () => {
        router.push("/delete-account")
    }



    const emailInputPlaceHolder = "habiters@gmail.com";
    const nicknameInputPlaceHolder = "해비터해비터"


    // 1. 검증하기
    //2. 백엔드컴터에보내주기
    //3. 성공알람 보여주기.



    return (
        <>
            <main>

                <Main>

                    <Title className={'headline1'}>
                        마이페이지
                    </Title>

                    <MyImgWrap>
                        <MyImg src="/image/image-default.svg" alt="기본이미지" />
                        <MyImgUpdateIcon className={'icon-round-l'} onClick={onClickUpdateImg}>
                            <span className={'icon-s icon-pencil'}></span>
                        </MyImgUpdateIcon>
                    </MyImgWrap>

                    <MypageInputWrap>
                        <MypageInputBox>
                            <div className={'body1-bold'}>
                                이메일
                            </div>
                            <div>
                                <Inputs
                                    placeholder={emailInputPlaceHolder} />
                                {/* <input type="text" class="input-default body3-medium color-black2"
                                    placeholder="habiters@gmail.com" /> */}
                            </div>
                        </MypageInputBox>

                        <MypageInputBox>
                            <div className={'body1-bold'}>
                                닉네임
                            </div>

                            <NickNameInputBox>
                                <div>
                                    <Inputs
                                        width={'292px'}
                                        placeholder={nicknameInputPlaceHolder} />
                                    {/* <input type="text" class="input-default body3-medium color-black2 nickname-input"
                                        placeholder="해비터해비터" /> */}
                                </div>
                                <NickNameUpdateBtn className="body2-medium btn btn-large btn-primary-default btn-width-fit-content">
                                    <span>수정</span>
                                </NickNameUpdateBtn>
                            </NickNameInputBox>
                        </MypageInputBox>
                    </MypageInputWrap>

                    <div className="btn-arrange-vertical">
                        <div>
                            <div className="btn btn-large btn-primary-default body2-medium">로그아웃</div>
                        </div>
                        <div>
                            <div className="btn btn-large btn-secondary-default body2-medium" 
                            onClick={onClickMoveDeleteAccount}>탈퇴하기</div>
                        </div>
                    </div>

                </Main>



            </main>
        </>

    )
}