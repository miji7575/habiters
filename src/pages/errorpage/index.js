import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil';


// ========================= Style ==============================

const Main = styled.div`

display: flex;
flex-direction: column;
min-height: calc(100vh - 292px + 100px);
 justify-content: center;
 align-items: center;

`

const ErrorImgBox = styled.div`
/* padding-top: 150px; */

`

const Error = styled.img`
height: 398px;
width: 379px;
`

const ButtonBox = styled.div`
padding-top: 40px;
/* padding-bottom: 150px; */
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

background-color: var(--color-purple2);
color: var(--color-white);
border: 1px solid var(--color-purple2);

/* body2-medium */
font-family: 'Pretendard-Medium'; 
font-size: 16px;
line-height: 24px;

  :hover{
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
    }

    margin-bottom: 200px;

`






export default function ErrorPage() {

    // ========================= Function  ==============================


    const router = useRouter()
    const onClickMove = () => {
        router.push("/myhabit")
    }


    return (
        <>
            <main>
                <Main>

                    <ErrorImgBox>
                        <div>
                            <Error src="/image/error.svg" alt="에러" />
                        </div>
                    </ErrorImgBox>

                    <ButtonBox>
                        <ButtonLarge onClick={onClickMove} >메인으로 돌아가기</ButtonLarge>
                    </ButtonBox>
                </Main>

            </main>
        </>

    )
}