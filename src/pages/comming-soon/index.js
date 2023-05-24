import styled from '@emotion/styled'
import { useRouter } from "next/router"

// =========================== Style =======================

const Main = styled.div`
display: flex;
justify-content: center;
padding-top: 325px;

`

export default function CommingSoonPage() {


   // =========================== Function =======================
    const router = useRouter()
    const onClickMove = () => {
        router.push("/")
    }



    return (
        <>
            <main>
            <Main>
                <div>
                    <img src="/image/Comming-soon.svg" alt="준비중"
                    onClick={onClickMove}/>
                </div>
            </Main>

            </main>
        </>

    )
}