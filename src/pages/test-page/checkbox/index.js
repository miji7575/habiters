import styled from '@emotion/styled'
import { CheckBoxDefault } from '../../../components/habitimunity/commons/checkbox'
import { useRouter } from 'next/router'


// ============================== Style ==============================

const Main = styled.div`

padding-left: 50px;



`
const Section = styled.div`
    display: flex;
    gap : 30px;
    padding-bottom: 30px;
    padding-top: 30px;
`

const BoxByType = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`
const GoBack = styled.div`
    width : 150px;
    height: 50px;
    background-color: var(--color-black7);
    border-radius: 10px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    font-weight: 900px;

`


export default function CheckBox() {
    
    const router = useRouter()
    const moveTestPage = () => {
        router.push("/test-page")
    }


    // ============================== Function  ==============================






    return (
        <Main>
            <h1>CheckBox</h1>
            <GoBack onClick={moveTestPage} >테스트페이지로</GoBack>
            <hr />



            <Section>

                <BoxByType>

                    <div> Checkbox default / selected</div>
                    <CheckBoxDefault />
                </BoxByType>



                <BoxByType>

                    <div> Checkbox disabled</div>
                    <CheckBoxDefault
                        isDisabled={true} />
                </BoxByType>

            </Section>



        </Main>

    )
}