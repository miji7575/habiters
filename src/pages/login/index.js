import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from "next/router"
import { userAccessToken, accessTokenStatem, URL, userDetail } from '../../components/stores';
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';

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


export default function LoginPage() {

    // ============================== Function  ==============================

    const router = useRouter()
    // console.log("LoginPage")




    // ----- 토큰을 로컬에 저장

    const [accessToken, setAccessToken] = useRecoilState(userAccessToken);


    const getAccessToken = async () => {
        setAccessToken(() => router.query.accessToken)
        // console.log("토큰 : " + accessToken)
        // if (accessToken) {
        //     localStorage.setItem("accessToken", accessToken)
        //     if (localStorage.getItem("accessToken")) {
        //         setAccessToken(localStorage.getItem("accessToken") || "")
        //     }
        // }
    }



    // ----- 유저의 정보 get
    const [user, setUser] = useRecoilState(userDetail);

    const getUserData = async () => {

        if (accessToken) {
            const response = await axios.get('https://api.habiters.store/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            setUser(response.data.data)
            return
        }
        // console.log(" 레이아웃 토큰없음. 유저정보 get x")

    }


    useEffect(() => {
        getAccessToken();
        getUserData()
        if (accessToken) {
            router.push("/myhabit")
        }
        // console.log(user)
    }, [accessToken])
    // ===============================================================================


    const onClickMoveSignup = () => {
        router.push("/signup")
    }

    // Push전에 수정!!!
    // =====  소셜로그인 주소
    const GOOGLE_LOGIN = "https://api.habiters.store/oauth2/authorization/google?redirect_uri=http://habiters.vercel.app/login"
    const KAKAO_LOGIN = "https://api.habiters.store/oauth2/authorization/kakao?redirect_uri=http://habiters.vercel.app/login"
    const NAVER_LOGIN = "https://api.habiters.store/oauth2/authorization/naver?redirect_uri=http://habiters.vercel.app/login"
    // const KAKAO_LOGIN = "https://api.habiters.store/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login"
    // const NAVER_LOGIN = "https://api.habiters.store/oauth2/authorization/naver?redirect_uri=http://localhost:3000/login"
    // const GOOGLE_LOGIN = "https://api.habiters.store/oauth2/authorization/google?redirect_uri=http://localhost:3000/login"

    const kakaoLogin = async () => {
        router.push(KAKAO_LOGIN)
    }

    const naverLogin = async () => {
        router.push(NAVER_LOGIN)
    }

    const googleLogin = async () => {
        router.push(GOOGLE_LOGIN)
    }



    return (
        <main>
            <Body>

                <LoginHeaderBox>
                    <div>
                        <Logo src="/image/logo-habiters.svg" alt="Logo" />
                    </div>
                    <div className="headline4 color-black1">
                        환영합니다, 당신의 습관 메이커 해비터즈입니다!
                    </div>
                </LoginHeaderBox>

                <LoginButtonBox>

                    <div className={'btn-sns-login btn-sns-login-google'}
                        onClick={googleLogin}>
                        <span className={'body2-medium'}>구글로 로그인하기</span>
                    </div>


                    <div className={'btn-sns-login btn-sns-login-kakao'}
                        onClick={kakaoLogin}>
                        <span className={'body2-medium'}>카카오로 로그인하기</span>
                    </div>


                    <div className={'btn-sns-login btn-sns-login-naver'}
                        onClick={naverLogin}>
                        <span className={'body2-medium'}>네이버로 로그인하기</span>
                    </div>


                </LoginButtonBox>

                <div className={'body2-medium color-black4'}>
                    처음이신가요? <MoveLink onClick={onClickMoveSignup}>회원가입하기</MoveLink>
                </div>

            </Body>

        </main>

    )
}