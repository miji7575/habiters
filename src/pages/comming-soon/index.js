import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useRecoilState } from 'recoil';

// =========================== Style =======================

const Main = styled.div`

 display: flex;
 /* height: calc(100vh - 292px); */
 min-height: calc(100vh - 292px + 100px);
 justify-content: center;
 align-items: center;

`
const CommingSoonContent = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
`

const ButtonBox = styled.div`
padding-top: 40px;

`

const ButtonLarge = styled.div`
width: 240px;

/* body2-medium */
  font-family: 'Pretendard-Medium'; 
  font-size: 16px;
  line-height: 24px;
`

export default function CommingSoonPage() {


    // =========================== Function =======================

    const router = useRouter()
    const onClickMove = () => {
        router.push("/myhabit")
    }



    return (
        <>
            <main>
                <Main>
                    <CommingSoonContent>
                        <img src="/image/Comming-soon.svg" alt="준비중"
                            onClick={onClickMove} />

                        <ButtonBox>
                            <ButtonLarge onClick={onClickMove} className={'btn btn-large btn-primary-default'}>메인으로 돌아가기</ButtonLarge>
                        </ButtonBox>
                    </CommingSoonContent>


                </Main>



            </main>
        </>

    )
}