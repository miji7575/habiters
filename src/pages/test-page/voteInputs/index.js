import styled from '@emotion/styled'
import Inputs from '../../../components/habitimunity/register/voteForm/votingInputs/inputs/Inputs.container'
import VotingInputs from '../../../components/habitimunity/register/voteForm/votingInputs/votingInputs.container'
import { InputValueState } from '../../../components/stores/index';
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
    > div > div {
        padding-bottom: 20px;
    }
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

export default function VoteInputsTestPage() {


    // -------------TEST------------
    const router = useRouter()
    const moveTestPage = () => {
        router.push("/test-page")
    }


    // useEffect(() => {
    //     console.log(inputValue)
    // })

    // ============================== Function  ==============================

    const [inputValue, setInputValue] = useRecoilState(InputValueState)


    // 2023-07-31 박미지 ------- Input값을 따로 넣어줄 경우.
    useEffect(() => {
        setInputValue({
            ...inputValue // 기존의 input 객체를 복사한 뒤
            , ["네번째 값"]: "밖에서 값 집어넣기🍀"
        }) // name 키를 가진 값을 value 로 설정        
    }, [])




 
    return (

        <Main>
            <h1>VoteInputsTestPage</h1>
            <GoBack onClick={moveTestPage} >테스트페이지로</GoBack>
            <hr />

            <Section>

                <BoxByType>
                    <div>
                        <h3>default / typing / typingDone</h3>
                        <div>
                            <Inputs
                                placeholder={'값을 입력하세요1번'}
                                name={"첫번쨰 값"}
                            />
                        </div>
                        <div>
                            <VotingInputs
                                placeholder={'값을 입력하세요1'}
                                name={"첫번쨰 값"}
                            />
                        </div>



                    </div>

                    <div>
                        <h3>width 변경</h3>

                        <div>
                            <Inputs
                                placeholder={'값을 입력하세요2번'}
                                width={'300px'}
                                name={"두번째 값"}
                            />
                        </div>

                        <div>
                            <VotingInputs
                                placeholder={'값을 입력하세요2'}
                                width={'300px'}
                                name={"두번째 값"}
                            />
                        </div>
                    </div>

                    <div>
                        <h3>error</h3>

                        <div>
                            <Inputs
                                placeholder={'값을 입력하세요3번'}
                                width={'500px'}
                                isError={true}
                                name={"세번째 값"} />
                        </div>

                        <div>
                            <VotingInputs
                                placeholder={'값을 입력하세요3'}
                                isError={true}
                                name={"세번째 값"}
                            />
                        </div>

                    </div>

                    <div>
                        <h3>밖에서 값 집어넣기🍀</h3>

                        <div>
                            <Inputs
                                placeholder={'값을 입력하세요4번'}
                                width={'1000px'}
                                name={"네번째 값"}
                            />
                        </div>

                        <div>
                            <VotingInputs
                                placeholder={'값을 입력하세요4'}
                                width={'1000px'}
                                name={"네번째 값"}
                            />
                        </div>
                    </div>







                </BoxByType>
            </Section>




        </Main>


    )
}