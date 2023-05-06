import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from "next/router"
import {userState} from '../../src/commons/stores/Stores';
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';


export default function LoginPage() {

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

    const onClickMoveSignup = () => {
        router.push("/signup")
    }

    // 임시!!!!!!!!!!!!!!!!!!!!!!!!!!11111
    const aaa = () => {
        router.push("/myhabit")
    }

    
    const kakaoLogin = async () => {

       
        


    }



    const KAKAO_LOGIN = "http://223.130.162.40:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/myhabit"


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

                    <div className={'btn-sns-login btn-sns-login-google'}>
                        <span
                            className={'body2-medium'}
                            onClick={aaa}>구글로 로그인하기</span>
                    </div>

                    <a href={KAKAO_LOGIN} onClick={kakaoLogin}>
                        <div className={'btn-sns-login btn-sns-login-kakao'} >
                            <span className={'body2-medium'}>카카오로 로그인하기</span>
                        </div>
                    </a>


                    <div className={'btn-sns-login btn-sns-login-naver'}>
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