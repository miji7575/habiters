import styled from '@emotion/styled'
import PostImage from '../../../components/habitimunity/commons/postImage/postImage.container'
import PostImageVer2 from '../../../components/habitimunity/commons/postImageVer2/postImageVer2.container';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';




const Main = styled.div`

    padding-left: 50px; 
    padding-bottom: 200px;
    /* display: inline-flex; */
    flex-direction: column;

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

// ==============Ver2 이미지가 추가되면서 보여지는 형식
export const PostImageUploaderThisPage = styled.label`
    padding: 10px;
    background-color: gray;
    width: 150px;
    height: 20px;

`

export const HiddenFileInputThisPage = styled.input`
    display: none;
`
const CustomTextAreaWrap = styled.div`
    padding: 20px;
    height: 500px;
    max-width: 1000px;
    min-width: 800px;
    background-color: beige;
    overflow: scroll;

`


export const CustomTextArea = styled.div`
   min-width: 800px;
    padding: 20px;
    height: 1000px;
    background-color: aliceblue;
`

export default function PostImagePage() {


    // -------------TEST------------
    const router = useRouter()
    const moveTestPage = () => {
        router.push("/test-page")
    }



    useEffect(() => {
        // console.log("imageIndex" + imageIndex)
        console.log(imageFile)
        console.log(imageUrl)
        // console.log("countImage" + countImage)
    })






    // ============================== Function  ==============================
    // =======================================================================
    const [imageFile, setImageFile] = useState([])
    const [imageUrl, setImageUrl] = useState([])
    const [imageIndex, setImageIndex] = useState('')
    const [countImage, setCountImage] = useState('')


    // ============================== Ver1. Function  ==============================


    const getImageData = (imageFile, imageUrl) => {

        setImageFile((prevstate) => [...prevstate, imageFile])
        setImageUrl((prevstate) => [...prevstate, imageUrl])
        // 삭제한걸 따로 빼줘야함
    }




    // ============================== Ver2. Function  ==============================


    useEffect(() => {
        setImageIndex(0)
        setCountImage(0)

    }, [])


    // 2023-08-24 박미지 --- 등록할 이미지 Data 저장, 화면에 띄워줄 URL 저장.
    const imgUpload = (e) => {
        setImageIndex(() => imageIndex++)
        setCountImage(() => countImage++)
        setImageFile(e.target.files[0] ? [...imageFile, { id: imageIndex, isThumbnail: false, File: e.target.files[0] }] : imageFile)
        setImageUrl(e.target.files[0] ? [...imageUrl, { id: imageIndex, isThumbnail: false, FileUrl: URL.createObjectURL(e.target.files[0]) }] : imageUrl);
    }



    // 2023-08-24 박미지 --- 이미지 삭제.
    const imageDelete = (index) => {
        setCountImage(() => countImage--)
        setImageFile(imageFile.filter(imageFile => imageFile.id !== index))
        setImageUrl(imageUrl.filter(imageUrl => imageUrl.id !== index))
    }

    // 2023-08-24 박미지 --- 이미지 수정?
    const imageUpdate = (e, index) => {
        console.log(e)
        console.log(index)

        setImageFile(imageFile.map(imageFile =>
            (imageFile.id === index && e.target.files[0]) ?
                { ...imageFile, id: index, File: e.target.files[0] } :
                imageFile))
        setImageUrl(imageUrl.map(imageUrl =>
            (imageUrl.id === index && e.target.files[0]) ?
                { ...imageUrl, id: index, FileUrl: URL.createObjectURL(e.target.files[0]) } :
                imageUrl))
        // setImageUrlVer2(imageUrlVer2.filter(imageUrlVer2 => imageUrlVer2.id !== index))

    }

    // 2023-08-24 박미지 --- 썸네일 지정할 이미지의 Index 가져오기.
    const thumbNailUpdate = (index) => {
        console.log(index)

        setImageFile(imageFile.map(imageFile =>
            (imageFile.id === index) ?
                { ...imageFile, isThumbnail: true} :
                { ...imageFile, isThumbnail: false}))
        setImageUrl(imageUrl.map(imageUrl =>
            (imageUrl.id === index ) ?
                { ...imageUrl, isThumbnail: true } :
                { ...imageUrl, isThumbnail: false }))

    }






    return (

        <Main>
            <h1>PostImage</h1>
            <GoBack onClick={moveTestPage} >테스트페이지로</GoBack>
            <hr />



            {/* ============================================================================= */}
            <div>빈 이미지에넣는 방법</div>

            <Section>
                <PostImage
                    getImageData={getImageData} />
                <PostImage
                    getImageData={getImageData} />
                <PostImage
                    getImageData={getImageData} />
                <PostImage
                    getImageData={getImageData} />
            </Section>






            {/* ============================================================================= */}
            <hr />
            <div>이미지가 추가되면서 보여지는 형식</div>

            <Section>

                {/* 이미지 업로더 버튼 */}
                <PostImageUploaderThisPage>
                    이미지 업로드
                    <HiddenFileInputThisPage id="img" name="files" type="file" accept="image/*" onClick={(e) => { if (imageUrl.length >= 3) { e.preventDefault(), alert("그만") } }}
                        onChange={imgUpload} />
                </PostImageUploaderThisPage>

                {/*  렌더링될 이미지 */}



                <CustomTextAreaWrap>
                    <PostImageVer2
                        imageUpdate={imageUpdate}
                        imageDelete={imageDelete}
                        thumbNailUpdate={thumbNailUpdate}
                        imageFile={imageFile}
                        imageUrl={imageUrl}
                    />

                    <CustomTextArea contentEditable suppressContentEditableWarning={true}>

                        TEst
                    </CustomTextArea>
                </CustomTextAreaWrap>

            </Section>


        </Main>


    )
}