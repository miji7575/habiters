import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from "next/router"
import { userAccessToken, accessTokenStatem, URL, userDetail, SelectBoxValueState } from '../../../components/stores';
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
//-------------
import { SelectBoxDefault, SelectBoxTimePicker } from '../../../components/habitimunity/commons/selectbox'


// ============================== Style ==============================

const Main = styled.div`

padding-left: 50px;



`
const SelectBoxSection = styled.div`
    display: flex;
    gap : 30px;
    padding-bottom: 30px;
    padding-top: 30px;
`

const SelectBoxByType = styled.div`
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

export default function TestPage() {
    const router = useRouter()
    const moveTestPage = () => {
        router.push("/test-page")
    }


    // ============================== Function  ==============================
    const [selectBoxvalue, setSelectboxValue] = useRecoilState(SelectBoxValueState)


    const OPTIONS = [
        { value: "1", name: "Option1" },
        { value: "2", name: "Option2" },
        { value: "3", name: "Option3" },
        { value: "4", name: "긴 내용의 글 긴 내용의 글 긴 내용의 글 긴 내용의 글 긴 내용의 글 긴 내용의 글" },
        { value: "5", name: "Option5" },
        { value: "6", name: "긴 내용의 글긴 내용의 글긴 내용의 글긴 내용의 글긴 내용의 글" },
        { value: "7", name: "Option7" },
        { value: "8", name: "Option8" },
    ];



    return (
        <Main>
            <h1>selectbox</h1>
            <GoBack onClick={moveTestPage} >테스트페이지로</GoBack>
            <hr />


            <SelectBoxSection>


                <SelectBoxByType>
                    <div> SelectBox Default  Large </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        name={"1번째"}

                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        isDisabled={true}
                        name={"2번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        isError={true}
                        name={"3번째"}
                    />


                </SelectBoxByType>


                <SelectBoxByType>

                    <div> SelectBox Default  Medium </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        size={"medium"}
                        name={"4번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        size={"medium"}
                        isDisabled={true}
                        name={"5번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        size={"medium"}
                        isError={true}
                        name={"6번째"}
                    />


                </SelectBoxByType>




            </SelectBoxSection>


            <SelectBoxSection>

                <SelectBoxByType>

                    <div> SelectBox Large 너비가 좁을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        name={"7번째"}
                        placeholder={"따로넣음"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isDisabled={true}
                        name={"8번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isError={true}
                        name={"9번째"}
                    />

                </SelectBoxByType>

                <SelectBoxByType>

                    <div> SelectBox Large 너비가 넓을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        name={"10번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isDisabled={true}
                        name={"11번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isError={true}
                        name={"12번째"}
                    />

                </SelectBoxByType>


            </SelectBoxSection>



            <SelectBoxSection>

                <SelectBoxByType>

                    <div> SelectBox Medium 너비가 좁을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        size={"medium"}
                        name={"13번째"}
                       
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isDisabled={true}
                        size={"medium"}
                        name={"13번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isError={true}
                        size={"medium"}
                        name={"13번째"}
                    />

                </SelectBoxByType>

                <SelectBoxByType>

                    <div> SelectBox Medium 너비가 넓을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        size={"medium"}
                        name={"13번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isDisabled={true}
                        size={"medium"}
                        name={"13번째"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isError={true}
                        size={"medium"}
                        name={"14번째"}
                    />

                </SelectBoxByType>


            </SelectBoxSection>


            <hr></hr>

            <SelectBoxSection>
                <SelectBoxByType>
                    <div>datepicker</div>

                    <SelectBoxTimePicker
                        name={"TimeLarge"}
                    />

                    <SelectBoxTimePicker
                        name={"TimeMedium"}
                        size={"medium"}
                    />



                    <div>
                        선택된 시간(Large) : {selectBoxvalue["TimeLarge"]}
                    </div>
                    <div>
                        선택된 시간(Medium) : {selectBoxvalue["TimeMedium"]}
                    </div>

                </SelectBoxByType>


            </SelectBoxSection>

        </Main>

    )
}