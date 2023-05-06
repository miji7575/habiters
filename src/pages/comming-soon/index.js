import styled from '@emotion/styled'
import { useRouter } from "next/router"

export default function CommingSoonPage() {

    // -----------------스타일

    const Main = styled.div`
    min-height : 100%;  
    display: flex;
    justify-content: center;
    padding-top: 325px;
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
                <div>
                    <img src="/image/Comming-soon.svg" alt="준비중"/>
                </div>
            </Main>

            </main>
        </>

    )
}