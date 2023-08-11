import styled from '@emotion/styled'
import { SelectBoxTimePicker } from '../../../components/habitimunity/commons/selectbox';
import DatePicker from '../../../components/habitimunity/commons/datepicker/datepicker.container';
import { SelectBoxValueState } from '../../../components/stores/index';
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useEffect } from 'react';



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

export default function VoteFormTestPage() {


    // ----- TEST --------
    const router = useRouter()
    const moveTestPage = () => {
        router.push("/test-page")
    }

    useEffect(() => {
        // console.log(selectBoxvalue)
    })


    const [selectBoxvalue, setSelectboxValue] = useRecoilState(SelectBoxValueState)
    // ============================== Function  ==============================




    return (

        <Main>
            <h1>DatePicker / TimePicker</h1>
            <GoBack onClick={moveTestPage} >테스트페이지로</GoBack>
            <hr />

            <Section>



                <BoxByType>

                    <h3>DatePicker</h3>


                    <DatePicker
                        // name={"TimeLarge"}
                    />
                    <div style={{ paddingBottom: "50px" }}>
                        선택된 시간(Large) : {selectBoxvalue["TimeLarge"]}
                    </div>




                    <SelectBoxTimePicker
                        name={"TimeMedium"}
                        size={"medium"}
                    />
                    <div>
                        선택된 시간(Medium) : {selectBoxvalue["TimeMedium"]}
                    </div>

                </BoxByType>




                <BoxByType>

                    <h3>TimePicker</h3>


                    <SelectBoxTimePicker
                        name={"TimeLarge"}
                    />
                    <div style={{ paddingBottom: "50px" }}>
                        선택된 시간(Large) : {selectBoxvalue["TimeLarge"]}
                    </div>




                    <SelectBoxTimePicker
                        name={"TimeMedium"}
                        size={"medium"}
                    />
                    <div>
                        선택된 시간(Medium) : {selectBoxvalue["TimeMedium"]}
                    </div>

                </BoxByType>






            </Section>




        </Main>


    )
}