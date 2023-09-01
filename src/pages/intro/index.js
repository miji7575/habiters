import styled from '@emotion/styled'
import { useRouter } from "next/router"


// ============================== Style ==============================
// 1페이지  
const IntroFirstPageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #E1DAFB -1.04%, rgba(255, 255, 255, 0) 100%);
    `

const IntroFirstPageTitleWrap = styled.div`
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--color-black1);
    `

const IntroFirstPageTitle = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 80px;
    font-weight: 900;
    line-height: 96px;
    letter-spacing: 0em;
    text-align: center;
    `

const IntroFirstPageSubTitle = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    `

const ButtonLarge = styled.div`
    width: 240px;


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

const BtnPrimary = styled(ButtonLarge)`
    background-color: var(--color-purple2);
    color: var(--color-white);
    border: 1px solid var(--color-purple2);
`

const BtnSecondary = styled(ButtonLarge)`
     background-color: var(--color-white);
    color: var(--color-purple2);
    border: 1px solid var(--color-purple2);
`

const NextIntroWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    gap: 12px;
    `

const IconArrow = styled.div`
    width: 25px;
    height: 50px;
    background: url(/image/icon/icon-arrow.svg) no-repeat;
    cursor: pointer;
    transition:  0.3s;
    &:hover{
        transition:  0.3s;
        position: relative;
        top : 15px
    }
    `
// 2페이지  
const IntroSecondPageWrap = styled.div`
     display: flex;
    justify-content: center;
    `

const IntroSecondPageImg = styled.img`
    width: 1180px;
    height: 1200px;
    `

// 3페이지  

const IntroThirdPageWrap = styled.div`
     display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 24.57%, #E1DAFB 100%);
    `




export default function IntroPage() {



    // ============================== Function  ==============================

    const router = useRouter()


    const onClickMoveLogin = () => {
        router.push("/login")
    }
    const onClickMoveSignup = () => {
        router.push("/signup")
    }

    // 1페이지


    return (
        <>
            <main>


                <IntroFirstPageWrap>
                    <IntroFirstPageTitleWrap>
                        <IntroFirstPageTitle>
                            HABIT?<br />
                            HAVE-IT!
                        </IntroFirstPageTitle>
                        <IntroFirstPageSubTitle>
                            해비터즈는 해킷트래커 기반 습관 성형 커뮤니티 입니다.<br />
                            누구나 얼마든지 건강한 습관을 가질 수 있습니다.<br />
                            해비터즈와 함께 더 나은 내가 되기 위한 여정을 지금 바로 시작하세요.
                        </IntroFirstPageSubTitle>
                    </IntroFirstPageTitleWrap>

                    <div className={'btn-box btn-arrange-row'}>
                        <BtnPrimary  onClick={onClickMoveLogin}>로그인하기</BtnPrimary>
                        <BtnSecondary  onClick={onClickMoveSignup}>회원가입하기</BtnSecondary>
                    </div>

                    <NextIntroWrap className={'body2-regular color-purple2'}>
                        <div>스크롤을 내려서 해비터즈의 기능을 확인해보세요.</div>
                        <IconArrow className="icon-arrow"></IconArrow>
                    </NextIntroWrap>
                </IntroFirstPageWrap>

                <IntroSecondPageWrap>

                    <div>
                        <IntroSecondPageImg src="/image/img-intro.svg" alt="소개이미지" />
                    </div>

                </IntroSecondPageWrap>

                <IntroThirdPageWrap>
                    <IntroFirstPageTitleWrap>
                        <IntroFirstPageTitle >HAVE IT NOW</IntroFirstPageTitle>
                        <IntroFirstPageSubTitle>지금 바로 해비터즈와 함께 습관 형성을 시작해보세요.</IntroFirstPageSubTitle>
                    </IntroFirstPageTitleWrap>
                    <div className={'btn-box btn-arrange-row'}>
                        <BtnPrimary onClick={onClickMoveLogin}>로그인하기</BtnPrimary>
                        <BtnSecondary onClick={onClickMoveSignup}>회원가입하기</BtnSecondary>
                    </div>
                </IntroThirdPageWrap>

            </main>
        </>

    )
}


