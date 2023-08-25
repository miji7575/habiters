

import styled from '@emotion/styled'
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { SelectBoxDefault } from '../../../components/habitimunity/commons/selectbox';
import { SelectBoxValueState, InputValueState, PostContentState, userAccessToken, FileState, FileUrlState, IndexState } from '../../../components/stores/index';
import Inputs from '../../../components/habitimunity/register/voteForm/votingInputs/inputs/Inputs.container';
import CommunityArticleEditor from '../../../components/habitimunity/register/communityArticleEditor/communityArticleEditor.container';
import axios from 'axios';
import { useRouter } from 'next/router';
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
    const router = useRouter()


    // 2023-08-04 박미지 ----- SelectBox 값 저장
    const [SelectBoxValue, setSelectedValue] = useRecoilState(SelectBoxValueState)
    const OPTIONS = [
        { value: "STUDY", text: "공부" },
        { value: "EXERCISE", text: "운동" },
        { value: "HEALTH", text: "건강" },
        { value: "DAILY", text: "일상" },
        { value: "ETC", text: "기타" },

    ];



    // 2023-08-04 박미지 ----- Input(제목) 값 저장  //inputValue["title"] 로 꺼내씀
    const [inputValue, setInputValue] = useRecoilState(InputValueState)

    const [postContent, setPostContent] = useRecoilState(PostContentState);

    useEffect(() => {


    })

    const data = {
        category: SelectBoxValue["categoryvalue"], // 선택된 카테고리 값
        title: inputValue["title"], // 제목 값
        content: postContent
    };


    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)

    const regCommunityArticle = async (e) => {
        // console.log(data);
        const thumbNailUrl = await postImage();

        if (accessToken) {
            const response = await axios.post('https://api.habiters.store/posts',
                {
                    "title": data.title,
                    "content": data.content,
                    // `<PostImage
                    // imageUrl=${imageServerUrl} />`,
                    "thumbnailUrl": thumbNailUrl,
                    "category": data.category
                }, {
                'Content-Type': 'application/json',
                headers: { Authorization: 'Bearer ' + accessToken }
            })

            console.log(response)

            router.push("/habitimunity")

            return
        }


        // setImageTagData(() => `<PostImage
        // imageUrl=${imageServerUrl} />`)



    }






    // ========================
    useEffect(() => {
        // console.log(imageUrl)
        // console.log("imageIndex" + imageIndex)
    })


    // 2023-08-25 박미지 ---- 이미지 업로드
    // ========================
    const [imageFile, setImageFile] = useRecoilState(FileState)
    const [imageUrl, setImageUrl] = useRecoilState(FileUrlState)
    const [imageIndex, setImageIndex] = useRecoilState(IndexState)
    const [ImageTagData, setImageTagData] = useState('')
    const [imageServerUrl, setImageServerUrl] = useState([])






    // 2023-08-24 박미지 --- 등록할 이미지 Data 저장, 화면에 띄워줄 URL 저장.
    const imgUpload = (e) => {
        setImageIndex(() => ++imageIndex)
        setImageFile(e.target.files[0] ? [...imageFile, { id: imageIndex, isThumbnail: false, File: e.target.files[0] }] : imageFile)
        setImageUrl(e.target.files[0] ? [...imageUrl, { id: imageIndex, isThumbnail: false, FileUrl: URL.createObjectURL(e.target.files[0]) }] : imageUrl);
    }



    // 이미지 API

    const formData = new FormData();

    const postImage = async () => {


        // imageFile.map(async (imageFileData, index) => {

        imageFile.map((data) => formData.append("file", data.File))

        const response = await axios.post(`https://api.habiters.store/images/upload`,
            formData
            , {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    Authorization: 'Bearer ' + accessToken,
                }
            })

        // setImageServerUrl(() => [...imageServerUrl, { id: imageFileData.id, FileUrl: response.data.data }])


        // if (imageServerUrl.length === imageFile.length) {
        //     await postArticle()
        // }
        return response.data.data
        // })




    }



    const postArticle = async () => {
        // console.log(`=========postArticle=========`)
        // console.log(imageServerUrl)
        // console.log(`=========postArticle=========`)



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



                    <CommunityArticleEditor
                        imgUpload={imgUpload}
                        imageUrl={imageUrl}
                        ImageTagData={ImageTagData}
                    />

                    <RegArticleBtn
                        onClick={regCommunityArticle}>등록하기</RegArticleBtn>

                </Content>

            </Main>


        </>
    )
}