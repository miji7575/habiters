import styled from '@emotion/styled'
import { useRouter } from "next/router"

export default function IntroServicePage() {

    // -----------------스타일

    const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `


    // -----1page
    const IntroServicePage1 = styled.div`
     height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 128px;
    align-items: center;
    justify-content: center;
    `

    const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: center;
    `

    const IntroServicePage1Title = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 80px;
    font-weight: 900;
    line-height: 96px;
    letter-spacing: 0em;
    text-align: center;

    line-height: 80px;
    letter-spacing: 0em;
    `

    // ----page2
    const IntroServicePage2 = styled.div`
    background-color: var(--color-black10);
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    `

    const IntroServiceDetailBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

`

    const Page2IntroServiceDetail = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    display: flex;
    flex-direction: column;
    gap: 64px;
    display: inline-block;
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
`

    // ----page3
    const IntroServicePage3 = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    `

    const IntroServicePage3IntroBox = styled.div`
    padding: 240px 0 ;
    text-align: center;
    `

    const IntroServicePage3DetainFont = styled.div`
     display: inline-block;
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    `

    const LogoBox = styled.div`
    padding: 120px 0 32px 0;
    `

    const IntroServicePage3Logo = styled.img`
    width: 407.46px;
    height: 48px;
    `

    const IntroServicePage3Image2Box = styled.div`
    padding-bottom: 56px;
    `

    const IntroServicePage3Image = styled.img`
        width: 906px;
        height: 412px;
    `

    const IntroServicePage3BannerBox = styled.div`
padding: 240px 0 200px 0;
`

    const IntroServicePage3Banner = styled.img`
    width: 1180px;
    height: 174px;
`






    const ButtonBox = styled.div`
    padding-top: 40px;
    `

    const ButtonLarge = styled.div`
    width: 240px;
    `




    //---------함수
    const router = useRouter()
    const onClickMove = () => {
        router.push("/")
    }



    return (
        <>
            <main>
                <Main>
                    <IntroServicePage1>
                        <IntroBox>
                            <div class="headline2 color-black1">모두가 건강하고 유익한 생활을 할 수 있도록.</div>
                            <IntroServicePage1Title className={'color-black1'}>HABIT? HAVE-IT!</IntroServicePage1Title>
                        </IntroBox>
                        <div>
                            <img src="/image/img-Intro-service1.svg" alt="서비스소개 이미지1" />
                        </div>
                    </IntroServicePage1>
                    <IntroServicePage2>
                        <IntroServiceDetailBox>
                            <div className={'headline1 color-black1'}>
                                HABITERS는 <br />
                                해빗트래커 기반 <br />
                                습관 성형 커뮤니티입니다.
                            </div>
                            <Page2IntroServiceDetail className={'color-black2'}>
                                <div >
                                    건강한 습관과 갓생은 <br />
                                    의지가 강한 사람들에게만 허락된 것이 아니라 <br />
                                    적절한 환경과 소소한 성취감만 주어진다면 <br />
                                    누구나 얼마든지 할 수 있다고 생각합니다.
                                </div>
                                <div >
                                    또한 그 과정은 ‘밀린 방학 숙제’ 같은<br />
                                    재미 없고 하기 싫은 것이 아니라<br />
                                    ‘더 나은 나’를 발견해가는 나를 찾아 떠나는<br />
                                    행복하고 즐거운 여행이었으면 좋겠다고 생각했습니다.
                                </div>
                            </Page2IntroServiceDetail>
                        </IntroServiceDetailBox>
                    </IntroServicePage2>

                    <IntroServicePage3>
                        <IntroServicePage3IntroBox>
                            <IntroServicePage3DetainFont className={'color-black2'}>
                                그래서 TEAM CLOVER🍀는 <br />
                                모두가 알차고 행복한 삶을 영위할 수 있게 하기 위해서 <br />
                                해당 서비스를 만들었습니다.
                            </IntroServicePage3DetainFont>
                            <LogoBox>
                                <IntroServicePage3Logo src="/image/logo-habiters.svg" alt="로고" />
                            </LogoBox>
                            <IntroServicePage3DetainFont className={'color-black1'}>
                                갓생을 사는 사람들과 모두가 함께 건강해질 수 있는 공간을요.
                            </IntroServicePage3DetainFont>
                        </IntroServicePage3IntroBox>

                        <IntroServicePage3Image2Box>
                            <IntroServicePage3Image src="/image/img-Intro-service2.svg" alt="서비스소개 이미지2" />
                        </IntroServicePage3Image2Box>

                        <div className={'headline1 color-black1'}>
                            더 나은 내가 되기 위한 여정,<br />
                            TEAM CLOVER🍀와 해비티가 함께 할게요!
                        </div>

                        <IntroServicePage3BannerBox>
                            <IntroServicePage3Banner src="/image/img-Intro-service-banner.svg" alt="서비스소개 배너" />
                        </IntroServicePage3BannerBox>

                    </IntroServicePage3>
                </Main>

            </main>
        </>

    )
}