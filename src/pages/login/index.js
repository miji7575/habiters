import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from "next/router"
import { userState, accessTokenState } from '../../commons/stores/Stores';
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';



export default function LoginPage() {

    // ============================== Style ==============================

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


    // ============================== Function  ==============================

    const router = useRouter()

    const onClickMoveSignup = () => {
        router.push("/signup")
    }


    // Push전에 수정!!!
    // =====  소셜로그인 주소
    const KAKAO_LOGIN = "http://223.130.162.40:8080/oauth2/authorization/kakao?redirect_uri=http://habiters.vercel.app/login"
    const NAVER_LOGIN = "http://223.130.162.40:8080/oauth2/authorization/naver?redirect_uri=http://habiters.vercel.app/myhabit"
    // const KAKAO_LOGIN = "http://223.130.162.40:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login"
    // const NAVER_LOGIN = "http://223.130.162.40:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/myhabit"



    const [accessToken, setAccessToken] = useRecoilState(userState);

    const kakaoLogin = async () => {

        router.push(KAKAO_LOGIN)
        // setAccessToken(() => router.query.accessToken)
        // console.log(accessToken + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    }




    useEffect(() => {
        console.log("로그인 페이지에서 가장 먼저 출력될 토큰 :  " + accessToken)

        setAccessToken(() => router.query.accessToken)
        // successLogin(accessToken)
        if (accessToken) {
            console.log(accessToken)
            localStorage.setItem("accessToken", accessToken)
            if (localStorage.getItem("accessToken")) {
                setAccessToken(localStorage.getItem("accessToken") || "")
                console.log(accessToken)
            }
            console.log("아아아아아아아아ㅏ")
            router.push("/myhabit")
        }
        // if (accessToken) {
        //     router.push("/myhabit")
        // }
    }, [])


    // const successLogin = (accessToken) => {

    //     console.log(accessToken)
    //     if(accessToken){
    //         console.log("아아아아아아아아ㅏ")
    //         router.push("/myhabit")
    //     }
    // }


    // useEffect(() => {
    //     localStorage.setItem("accessToken",accessToken)
    //     console.log(accessToken)
    //     // if(accessToken){

    //     // }

    //     console.log(localStorage)
    //     if (localStorage.getItem("accessToken")) {
    //         setAccessToken(localStorage.getItem("accessToken") || "")
    //         console.log(accessToken)
    //     }
    // }, [accessToken])




    return (
        <main>
            <Body>

                <LoginHeaderBox>
                    <div>
                        <Logo src="/image/logo-habiters.svg" alt="Logo" />
                    </div>
                    <div class="headline4 color-black1">
                        환영합니다, 당신의 습관 메이커 해비터즈입니다!
                    </div>
                </LoginHeaderBox>

                <LoginButtonBox>

                    {/* <div className={'btn-sns-login btn-sns-login-google'}>
                        <span
                            className={'body2-medium'}
                            onClick={aaa}>구글로 로그인하기</span>
                    </div> */}

                    <a onClick={kakaoLogin}>
                        <div className={'btn-sns-login btn-sns-login-kakao'} >
                            <span className={'body2-medium'}>카카오로 로그인하기</span>
                        </div>
                    </a>

                    <a href={NAVER_LOGIN}>
                        <div className={'btn-sns-login btn-sns-login-naver'}>
                            <span className={'body2-medium'}>네이버로 로그인하기</span>
                        </div>
                    </a>

                </LoginButtonBox>

                <div className={'body2-medium color-black4'}>
                    처음이신가요? <MoveLink onClick={onClickMoveSignup}>회원가입하기</MoveLink>
                </div>

            </Body>

        </main>

    )
}