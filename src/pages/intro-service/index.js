import styled from '@emotion/styled'
import { useRouter } from "next/router"

// ====================================  STYLE ==============================================


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

/* headline2 */
  font-family: 'Pretendard-Bold'; 
  font-size: 32px;
  line-height: 42px;
  color: var(--color-black1);
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
/* align-items: center; */
`

const IntroServiceDetailBox = styled.div`

padding: 200px 0 200px 0;
display: grid;
grid-template-rows: 156px 80px 144px 64px 144px;
grid-template-columns: 410px 242px 1fr;

`

const Page2IntroServiceDetail1 = styled.div`
    width: 420px;
    box-sizing: border-box;
    color: var(--color-black1);
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    /* headline1 */
  font-family: 'Pretendard-Bold'; 
  font-size: 40px;
  line-height: 52px;
`

const Page2IntroServiceDetail2 = styled.div`
    width: 510px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    

    font-family: 'Pretendard-Bold';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    color: var(--color-black2);
`
const Page2IntroServiceDetail3 = styled.div`
    width: 510px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;

    font-family: 'Pretendard-Bold';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    color: var(--color-black2);

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
color:var(--color-black2);
`

const IntroServicePage3DetainFontBlack1 = styled(IntroServicePage3DetainFont)`
color:var(--color-black1);
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

const IntroServicePage3Detail2 = styled.div`
    text-align: center;
    /* headline1 */
  font-family: 'Pretendard-Bold'; 
  font-size: 40px;
  line-height: 52px;
  color: var(--color-black1);
`

const IntroServicePage3BannerBox = styled.div`
    margin: 240px 0 200px 0;
    width: 1180px;
    height: 174px;
    border-radius: 16px;
    background-color: var(--color-black10);
    box-sizing: border-box;


    display: grid;
    grid-template-columns: 1fr 337px;
    grid-template-rows: 174px;

    

`

const IntroServicePage3BannerContent = styled.div`
    padding-left: 80px;
    padding-top: 48px;
    color: var(--color-black1);
    box-sizing: border-box;
    grid-template-areas: 0 ;
    /* body1-bold */
  font-family: 'Pretendard-Bold'; 
  font-size: 18px;
  line-height: 26px;
`
const IntroServicePage3BannerImageBox = styled.div`
position: relative;
width: 337px;
height: 174px;
overflow: hidden;
border-top-right-radius: 16px;

`
const GreenRound = styled.div`
position: absolute;
 width: 108px;
 height: 108px;
 border-radius: 54px;
 background-color: var(--color-green3);
 top: 23px;
`

const PurpleRound = styled.div`
position: absolute;
 width: 262px;
 height: 262px;
 border-radius: 131px;
 background-color: var(--color-purple3);
 top: 35px;
 right: 18px;
`
const BlueRound = styled.div`
position: absolute;
 width: 178px;
 height: 178px;
 border-radius: 89px;
 background-color: var(--color-skyblue3);
 bottom: 43px;
 right: -46px;
`

const ButtonBox = styled.div`
padding-top: 40px;
`

const ButtonLarge = styled.div`
width: 240px;
`

export default function IntroServicePage() {

    // ====================================  Function  ==============================================

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
                            <div>모두가 건강하고 유익한 생활을 할 수 있도록.</div>
                            <IntroServicePage1Title >HABIT? HAVE-IT!</IntroServicePage1Title>
                        </IntroBox>
                        <div>
                            <img src="/image/img-Intro-service1.svg" alt="서비스소개 이미지1" />
                        </div>
                    </IntroServicePage1>
                    <IntroServicePage2>
                        <IntroServiceDetailBox>
                            <Page2IntroServiceDetail1>
                                HABITERS는 <br />
                                해빗트래커 기반 <br />
                                습관 성형 커뮤니티입니다.
                            </Page2IntroServiceDetail1>

                            <Page2IntroServiceDetail2>
                                건강한 습관과 갓생은 <br />
                                의지가 강한 사람들에게만 허락된 것이 아니라 <br />
                                적절한 환경과 소소한 성취감만 주어진다면 <br />
                                누구나 얼마든지 할 수 있다고 생각합니다.
                            </Page2IntroServiceDetail2>

                            <Page2IntroServiceDetail3>
                                또한 그 과정은 ‘밀린 방학 숙제’ 같은<br />
                                재미 없고 하기 싫은 것이 아니라<br />
                                ‘더 나은 나’를 발견해가는 나를 찾아 떠나는<br />
                                행복하고 즐거운 여행이었으면 좋겠다고 생각했습니다.
                            </Page2IntroServiceDetail3>

                        </IntroServiceDetailBox>
                    </IntroServicePage2>

                    <IntroServicePage3>
                        <IntroServicePage3IntroBox>
                            <IntroServicePage3DetainFont>
                                그래서 TEAM CLOVER🍀는 <br />
                                모두가 알차고 행복한 삶을 영위할 수 있게 하기 위해서 <br />
                                해당 서비스를 만들었습니다.
                            </IntroServicePage3DetainFont>
                            <LogoBox>
                                <IntroServicePage3Logo src="/image/logo-habiters.svg" alt="로고" />
                            </LogoBox>
                            <IntroServicePage3DetainFontBlack1>
                                갓생을 사는 사람들과 모두가 함께 건강해질 수 있는 공간을요.
                            </IntroServicePage3DetainFontBlack1>
                        </IntroServicePage3IntroBox>

                        <IntroServicePage3Image2Box>
                            <IntroServicePage3Image src="/image/img-Intro-service2.svg" alt="서비스소개 이미지2" />
                        </IntroServicePage3Image2Box>

                        <IntroServicePage3Detail2>
                            더 나은 내가 되기 위한 여정,<br />
                            TEAM CLOVER🍀와 해비티가 함께 할게요!
                        </IntroServicePage3Detail2>

                        <IntroServicePage3BannerBox>
                            {/* <IntroServicePage3BannerBackground src="/image/img-Intro-service-banner.svg" alt="서비스소개 배너" /> */}

                            <IntroServicePage3BannerContent>
                                피드백은 언제든지 환영이예요! 🤗<br />
                                🍀 TEAM CLOVER<br />
                                : weareteamclovers@gmail.com<br />
                            </IntroServicePage3BannerContent>

                            <IntroServicePage3BannerImageBox>
                                <GreenRound />
                                <BlueRound/>
                                <PurpleRound/>
                            </IntroServicePage3BannerImageBox>


                        </IntroServicePage3BannerBox>

                    </IntroServicePage3>
                </Main>

            </main>
        </>

    )
}