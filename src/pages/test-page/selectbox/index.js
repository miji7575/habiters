import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from "next/router"
import { userAccessToken, accessTokenStatem, URL, userDetail } from '../../../components/stores';
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
//-------------
import {  SelectBoxDefault } from '../../../components/habitimunity/commons/selectbox'


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
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        isDisabled={true} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        isError={true} />


                </SelectBoxByType>


                <SelectBoxByType>

                    <div> SelectBox Default  Medium </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        type={"medium"} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        type={"medium"}
                        isDisabled={true} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        type={"medium"}
                        isError={true} />


                </SelectBoxByType>




            </SelectBoxSection>


            <SelectBoxSection>

                <SelectBoxByType>

                    <div> SelectBox Large 너비가 좁을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isDisabled={true} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isError={true} />

                </SelectBoxByType>

                <SelectBoxByType>

                    <div> SelectBox Large 너비가 넓을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isDisabled={true} />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isError={true} />

                </SelectBoxByType>


            </SelectBoxSection>



            <SelectBoxSection>

                <SelectBoxByType>

                    <div> SelectBox Medium 너비가 좁을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        type={"medium"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isDisabled={true}
                        type={"medium"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"150px"}
                        isError={true}
                        type={"medium"}
                    />

                </SelectBoxByType>

                <SelectBoxByType>

                    <div> SelectBox Medium 너비가 넓을 떄 </div>

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        type={"medium"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isDisabled={true}
                        type={"medium"}
                    />

                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"500px"}
                        isError={true}
                        type={"medium"}
                    />

                </SelectBoxByType>


            </SelectBoxSection>


        </Main>

    )
}