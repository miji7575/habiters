

import styled from '@emotion/styled'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { SelectBoxDefault } from '../../../components/habitimunity/commons/selectbox';
import { SelectBoxValueState, InputValueState } from '../../../components/stores/index';
import Inputs from '../../../components/habitimunity/register/voteForm/votingInputs/inputs/Inputs.container';
import CommunityArticleEditor from '../../../components/habitimunity/register/communityArticleEditor/communityArticleEditor.container';
// ============================== Style ==============================
const Main = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 72px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 200px;
    width: 880px;
    gap: 20px;
    align-items: center;
    >:last-of-type{
        margin-top: 44px;
    }

`

const RegArticleBtn = styled.div`

    width: 380px;
    height: 48px;
    box-sizing: border-box;
    padding: 12px 16px 12px 16px;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    transition: all .3s;
    cursor: pointer;
   
    background-color: var(--color-purple2);
    border: 1px solid var(--color-purple2);


    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);

    

    :hover{
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
    }


    /* {클릭됐을 때 =>   border: 1px solid var(--color-purple1);,  background-color: var(--color-purple1); } */
   


`


// -----------------스타일




export default function BoardRegister() {


    // 2023-08-04 박미지 ----- SelectBox 값 저장
    const [SelectBoxValue, setSelectedValue] = useRecoilState(SelectBoxValueState)
    const OPTIONS = [
        { value: "1", name: "공부" },
        { value: "2", name: "운동" },
        { value: "3", name: "건강" },
        { value: "4", name: "일상" },
        { value: "5", name: "기타" },

    ];



    // 2023-08-04 박미지 ----- Input(제목) 값 저장  //inputValue["title"] 로 꺼내씀
    const [inputValue, setInputValue] = useRecoilState(InputValueState)


    useEffect(() => {
        // console.log(SelectBoxValue)
        // console.log(inputValue["title"])
    })



    const regCommunityArticle = (e) => {
        console.log(e)
    }





    return (
        <>

            <Main>
                <Content>
                    <SelectBoxDefault
                        options={OPTIONS}
                        width={"880px"}
                        placeholder={"카테고리를 선택해 주세요"}
                        name={"category"}

                    />
                    <Inputs
                        width={'880px'}
                        placeholder={"제목을 입력해주세요. (50자 제한)"}
                        name={"title"} />
                    <CommunityArticleEditor />

                    <RegArticleBtn
                        onClick={regCommunityArticle}>등록하기</RegArticleBtn>

                </Content>

            </Main>


        </>
    )
}