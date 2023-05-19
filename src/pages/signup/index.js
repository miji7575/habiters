import styled from '@emotion/styled'
import { useRouter } from "next/router"

export default function SignupPage() {

    // -----------------스타일

    const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

    const LoginHeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 200px;
    margin-bottom: 56px;
    `

    const Logo = styled.img`
    width: 305.6px;
    height: 36px;
    `

    const LoginButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 64px;
    `

    const MoveLink = styled.span`
        text-decoration: underline;
        color: var(--color-purple2);
        padding-left: 8px;
        cursor: pointer;
    `


    //---------함수
    const router = useRouter()
    const onClickMoveLogin = () => {
        router.push("/login")
    }

    const kakaoLogin = async () => {


    }

    const KAKAO_LOGIN = "https://api.habiters.store/oauth2/authorization/kakao?redirect_uri=http://habiters.vercel.app/myhabit"
    const NAVER_LOGIN = "https://api.habiters.store/oauth2/authorization/naver?redirect_uri=http://habiters.vercel.app/myhabit"


    return (
        <main>
            <Body>

                <LoginHeaderBox>
                    <div>
                        <Logo src="/image/logo-habiters.svg" alt="Logo" />
                    </div>
                    <div className="headline4 color-black1">
                        해비터즈와 함께 지금 바로 습관 형성을 시작하세요!
                    </div>
                </LoginHeaderBox>

                <LoginButtonBox>

                    {/* <div className={'btn-sns-login btn-sns-login-google'}>
                        <span className={'body2-medium'}>구글로 시작하기</span>
                    </div> */}

                    <a href={KAKAO_LOGIN} onClick={kakaoLogin}>
                        <div className={'btn-sns-login btn-sns-login-kakao'}>
                            <span className={'body2-medium'}>카카오로 시작하기</span>
                        </div>
                    </a>


                    <a href={NAVER_LOGIN}>
                        <div className={'btn-sns-login btn-sns-login-naver'}>
                            <span className={'body2-medium'}>네이버로 시작하기</span>
                        </div>
                    </a>

                </LoginButtonBox>

                <div className={'body2-medium color-black4'}>
                    처음이신가요? <MoveLink onClick={onClickMoveLogin}>로그인하기</MoveLink>
                </div>

            </Body>

        </main>

    )
}