import styled from '@emotion/styled'
import { useRouter } from "next/router"


// ========================= Style ==============================

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 70vh;
`

const ErrorImgBox = styled.div`
padding-top: 150px;

`

const Error = styled.img`
height: 398px;
width: 379px;
`

const ButtonBox = styled.div`
padding-top: 40px;
padding-bottom: 150px;
`

const ButtonLarge = styled.div`
width: 240px;
`


export default function ErrorPage() {

// ========================= Function  ==============================

    const router = useRouter()
    const onClickMove = () => {
        router.push("/")
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
                        <ButtonLarge onClick={onClickMove} className={'btn btn-large btn-primary-default body2-medium'}>메인으로 돌아가기</ButtonLarge>
                    </ButtonBox>
                </Main>

            </main>
        </>

    )
}