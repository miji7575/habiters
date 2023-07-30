import styled from '@emotion/styled'
import { CheckBoxDefault } from '../../../components/habitimunity/commons/checkbox'


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

export default function CheckBox() {


    // ============================== Function  ==============================






    return (
        <Main>
            <h1>CheckBox</h1>
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