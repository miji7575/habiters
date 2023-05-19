import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState, userDetail, userHabitState, URL } from '../commons/stores/Stores';
import { useEffect, useRef, useState } from 'react';

import { css, keyframes } from '@emotion/react';




const Main = styled.div`
    height: 100vh;
    overflow-y: auto;
    /* width: 100vw; */
    overflow-x: hidden; 
`
// ============================== Style ==============================
// 1페이지  
const IntroFirstPageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #E1DAFB -1.04%, rgba(255, 255, 255, 0) 100%);
    `

const IntroFirstPageTitleWrap = styled.div`
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    `

const NextIntroWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    gap: 20px;
    `





// ======================================================================================


const rotate = keyframes` /* 2. css코드를 씀. */
0%{
    transform: rotate(0deg);
    border-radius: 0px;
}
50%{ 
    border-radius: 100px;
}
100%{
    transform: rotate(350deg);
    border-radius: 0px;
}
`;




const bounce = keyframes`
from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
}

40%, 43% {
    transform: translate3d(0, -20px, 0);
}

70% {
    transform: translate3d(0, -15px, 0);
}

90% {
    transform: translate3d(0,-4px,0);
}
`


const IconArrow = styled.div`
    width: 25px;
    height: 50px;
    background: url(/image/icon/icon-arrow.svg) no-repeat;
    margin: 0 10px 10px 10px;
    cursor: pointer;
    animation: ${bounce} 1.5s linear infinite ;
 
    `







const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  animation: ${rotate} 1s linear infinite; /* 2. css코드를 씀. */
  
   span {
    font-size: 20px;
    &:hover {
      font-size: 40px;
    }
  }
`;


// ======================================================================================



// 2페이지  
const IntroSecondPageWrap = styled.div`
        min-height: 100vh;
        padding-top: 200px;
        width: 100vw;
        display: flex;
        justify-content: center;
    `

const IntroSecondPageImg = styled.img`
    /* width: 1180px; */
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

    const [accessToken, setAccessToken] = useRecoilState(userState);



    // ===============안필요
    const [user, setUser] = useRecoilState(userDetail)
    const [userHabit, setUserHabit] = useRecoilState(userHabitState)
    // ============================================


    const onClickMoveLogin = () => {

        // =========================TOKEN TEST================
        setAccessToken(() => '')
        setUser('')
        setUserHabit('')

        if (localStorage.getItem("accessToken")) {
            localStorage.setItem("accessToken", '')
        }
        // =========================TOKEN TEST================
        router.push("/login")
    }
    const onClickMoveSignup = () => {
        router.push("/signup")
    }


    const url = useRecoilValue(URL)
    // console.log(url)

    // ========================================================================
    // -========================================================================
    // ============================================================================

    const introOuterRef = useRef()
    const firstPageRef = useRef()
    const secondPageRef = useRef()
    const thirdPageRef = useRef()



    const nextPagehandler = () => {
        const pageHeight = window.innerHeight;
        introOuterRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
        })
    }



    // const aaa = () => {
    //     const { scrollTop } = introOuterRef.current;
    //     setScrollY(scrollTop);
    //     console.log(window.scrollY)
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", aaa);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll); 		// 스크롤 이벤트 제거
    //     };
    // })

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        console.log(introOuterRef.current.scrollTop)

        document.addEventListener('scroll', () => setScrollY(introOuterRef.current.scrollTop));
        // console.log(scrollY)
    })
    // useEffect(() => {
    //     (() => {


    //         // window.addEventListener('scroll', () => setScrollY(introOuterRef.current.scrollY));
    //         // console.log(scrollY);
    //         // introOuterRef.current
    //         if (1800 > scrollY > 1700) {
    //             window.scrollTo({
    //                 top: document.body.scrollHeight,
    //                 left: 0,
    //                 behavior: "smooth",
    //             })


    //         } else if (scrollY < 100) {
    //             // setScrollToggle(false);
    //             console.log(scrollY);
    //         }
    //     })();
    //     return () => {
    //         window.removeEventListener('scroll', () =>
    //             setScrollY(introOuterRef.current.scrollTop),
    //             console.log(scrollY)
    //         );
    //     };
    // });
    // useEffect(()=>{
    //     if(scrollY > 1700){
    //         console.log("지금이다")
    //         window.scrollTo({
    //             top: document.body.scrollHeight,
    //             left: 0,
    //             behavior: "smooth",
    //         })
    //     }

    // if(window.scrollY < 1600){

    //     // window.scrollTo({
    //     //     top: document.body.scrollHeight,
    //     //     left: 0,
    //     //     behavior: "smooth",
    //     // })
    // }


    // })

    // useEffect(() => {
    //     const wheelHandler = (e) => {
    //       e.preventDefault();
    //       // 스크롤 행동 구현

    //       const { deltaY } = e;
    //       const { scrollTop } = introOuterRef.current; // 스크롤 위쪽 끝부분 위치
    //       const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.


    //       if (deltaY > 0) {
    //         // 스크롤 내릴 때
    //         if (scrollTop >= 0 && scrollTop < pageHeight) {
    //           //현재 1페이지
    //           console.log("현재 1페이지, down");
    //           introOuterRef.current.scrollTo({
    //             top: pageHeight,
    //             left: 0,
    //             behavior: "smooth",
    //           });
    //         } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
    //           //현재 2페이지
    //           console.log("현재 2페이지, down");
    //           introOuterRef.current.scrollTo({
    //             top: pageHeight * 2,
    //             left: 0,
    //             behavior: "smooth",
    //           });
    //         } else {
    //           // 현재 3페이지
    //           console.log("현재 3페이지, down");
    //           introOuterRef.current.scrollTo({
    //             top: pageHeight * 2,
    //             left: 0,
    //             behavior: "smooth",
    //           });
    //         }
    //       } else {
    //         // 스크롤 올릴 때
    //         if (scrollTop >= 0 && scrollTop < pageHeight) {
    //           //현재 1페이지
    //           console.log("현재 1페이지, up");
    //           introOuterRef.current.scrollTo({
    //             top: 0,
    //             left: 0,
    //             behavior: "smooth",
    //           });
    //         } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
    //           //현재 2페이지
    //           console.log("현재 2페이지, up");
    //           introOuterRef.current.scrollTo({
    //             top: 0,
    //             left: 0,
    //             behavior: "smooth",
    //           });
    //         } else {
    //           // 현재 3페이지
    //           console.log("현재 3페이지, up");
    //           introOuterRef.current.scrollTo({
    //             top: pageHeight,
    //             left: 0,
    //             behavior: "smooth",
    //           });
    //         }
    //       }

    //     };
    //     const introOuterRefCurrent = introOuterRef.current;
    //     introOuterRefCurrent.addEventListener("wheel", wheelHandler);
    //     return () => {
    //         introOuterRefCurrent.removeEventListener("wheel", wheelHandler);
    //     };
    //   }, []);


    return (
        <>
            <Main ref={introOuterRef}>


                <IntroFirstPageWrap>
                    <IntroFirstPageTitleWrap className={'color-black1'}>
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
                        <ButtonLarge className={'btn btn-large btn-primary-default body2-medium'} onClick={onClickMoveLogin}>로그인하기</ButtonLarge>
                        <ButtonLarge className={'btn btn-large btn-secondary-default body2-medium'} onClick={onClickMoveSignup}>회원가입하기</ButtonLarge>
                    </div>

                    <NextIntroWrap className={'body2-regular color-purple2'}>
                        <div>스크롤을 내려서 해비터즈의 기능을 확인해보세요.</div>
                        <IconArrow
                            // className="icon-arrow"
                            onClick={nextPagehandler}

                        ></IconArrow>


                        {/* <Box>
                            <span>👩🏻‍💻</span>
                        </Box>





                        <div
                            css={css`
      animation: ${bounce} 1s ease infinite;
    `}
                        >
                            some bouncing text!
                        </div> */}






                    </NextIntroWrap>
                </IntroFirstPageWrap>

                <IntroSecondPageWrap>

                    <div>
                        <IntroSecondPageImg src="/image/img-intro.svg" alt="소개이미지" />
                    </div>

                </IntroSecondPageWrap>







                <IntroThirdPageWrap ref={thirdPageRef}>
                    <IntroFirstPageTitleWrap>
                        <IntroFirstPageTitle >HAVE IT NOW</IntroFirstPageTitle>
                        <IntroFirstPageSubTitle>지금 바로 해비터즈와 함께 습관 형성을 시작해보세요.</IntroFirstPageSubTitle>
                    </IntroFirstPageTitleWrap>
                    <div className={'btn-box btn-arrange-row'}>
                        <ButtonLarge className={'btn btn-large btn-primary-default body2-medium'} onClick={onClickMoveLogin}>로그인하기</ButtonLarge>
                        <ButtonLarge className={'btn btn-large btn-secondary-default body2-medium'} onClick={onClickMoveSignup}>회원가입하기</ButtonLarge>
                    </div>
                </IntroThirdPageWrap>

            </Main>
        </>

    )
}


