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
     /* body2-medium */
    font-family: 'Pretendard-Medium'; 
    font-size: 16px;
    line-height: 24px;
    color:var(--color-black1);
    `

const LoginHeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 200px;
    margin-bottom: 56px;
            /* headline4 */
    font-family: 'Pretendard-Bold'; 
    font-size: 24px;
    line-height: 32px;
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

const LoginBtn = styled.div`
width: 600px;
height: 60px;
box-sizing: border-box;
border-radius: 8px;
display: flex;
justify-content: center;
cursor: pointer;
>span{
    display: inline-flex;
    align-items: center;
}
>span::before{
    content: '';
    display: inline-flex;
    align-items: center;
    width: 16px;
    height: 16px;
    padding-right: 8px;
}

`
const GoogleLoginBtn = styled(LoginBtn)`
border: 1px solid var(--color-black1);
color: var(--color-black1);
>span::before{
    background: url(/image/icon/icon-logo-google.svg) no-repeat;
}
`

const KaKaoLoginBtn = styled(LoginBtn)`
background-color: #FAE64C;
color: var(--color-black1);
>span::before{
    background: url(/image/icon/icon-logo-kakao.svg) no-repeat;
}

`

const NaverLoginBtn = styled(LoginBtn)`
background-color: #00C300;
color: var(--color-white);
>span::before{
    background: url(/image/icon/icon-logo-naver.svg) no-repeat;
}

`

const MoveLinkWrap = styled.div`
color: var(--color-black4);
`


const MoveLink = styled.span`
        text-decoration: underline;
        color: var(--color-purple2);
        padding-left: 8px;
        cursor: pointer;
    `


export default function SignupPage() {


    // ============================== Function  ==============================

    const router = useRouter()





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


    const onClickMoveLogin = () => {
        router.push("/login")
    }

    // Push전에 수정!!!
    // =====  소셜로그인 주소
    const GOOGLE_LOGIN = "https://api.habiters.store/oauth2/authorization/google?redirect_uri=http://habiters.vercel.app/login"
    const KAKAO_LOGIN = "https://api.habiters.store/oauth2/authorization/kakao?redirect_uri=http://habiters.vercel.app/login"
    const NAVER_LOGIN = "https://api.habiters.store/oauth2/authorization/naver?redirect_uri=http://habiters.vercel.app/login"
    // const KAKAO_LOGIN = "https://api.habiters.store/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login"
    // const NAVER_LOGIN = "https://api.habiters.store/oauth2/authorization/naver?redirect_uri=http://localhost:3000/login"
    // const GOOGLE_LOGIN = "https://api.habiters.store/oauth2/authorization/google?redirect_uri=http://localhost:3000/login"


    const googleLogin = async () => {
        router.push(GOOGLE_LOGIN)
    }

    const kakaoLogin = async () => {
        router.push(KAKAO_LOGIN)
    }

    const naverLogin = async () => {
        router.push(NAVER_LOGIN)
    }




    return (
        <main>
            <Body>

                <LoginHeaderBox>
                    <div>
                        <Logo src="/image/logo-habiters.svg" alt="Logo" />
                    </div>
                    <div>
                        해비터즈와 함께 지금 바로 습관 형성을 시작하세요!
                    </div>
                </LoginHeaderBox>

                <LoginButtonBox>

                    <GoogleLoginBtn
                        onClick={googleLogin}>
                        <span>구글로 시작하기</span>
                    </GoogleLoginBtn>

                    <KaKaoLoginBtn 
                        onClick={kakaoLogin}>
                        <span>카카오로 시작하기</span>
                    </KaKaoLoginBtn>

                    <NaverLoginBtn 
                        onClick={naverLogin}>
                        <span>네이버로 시작하기</span>
                    </NaverLoginBtn>


                </LoginButtonBox>

                <MoveLinkWrap>
                    이미 회원이신가요? <MoveLink onClick={onClickMoveLogin}>로그인하기</MoveLink>
                </MoveLinkWrap>

            </Body>

        </main>

    )
}