import { useEffect, useState } from 'react';
import PostImageUI from './postImageVer2.presenter';
import { FileState, FileUrlState, IndexState } from '../../../stores/index';
import { useRecoilState } from 'recoil';


export default function PostImage(props) {
    // const [imageFile, setImageFile] = useState([])
    // const [imageUrl, setImageUrl] = useState([])
    // const [imageIndex, setImageIndex] = useState('')
    // const [countImage, setCountImage] = useState('')

    const [imageFile, setImageFile] = useRecoilState(FileState)
    const [imageUrl, setImageUrl] = useRecoilState(FileUrlState)
    const [imageIndex, setImageIndex] = useRecoilState(IndexState)

    

    useEffect(()=>{
        // console.log(imageUrl)
    })

    // 2023-08-24 박미지 --- 이미지 삭제.
    const imageDelete = (index) => {
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
                    { ...imageFile, isThumbnail: true } :
                    { ...imageFile, isThumbnail: false }))
            setImageUrl(imageUrl.map(imageUrl =>
                (imageUrl.id === index) ?
                    { ...imageUrl, isThumbnail: true } :
                    { ...imageUrl, isThumbnail: false }))
    
        }




    return (
        <>
            <PostImageUI
                thumbNailUpdate={thumbNailUpdate}
                imageUpdate={imageUpdate}
                imageDelete={imageDelete}
                imageUrl={imageUrl}
            />
        </>
    )
}