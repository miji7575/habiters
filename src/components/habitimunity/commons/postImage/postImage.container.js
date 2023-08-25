import { useEffect, useState } from 'react';
import PostImageUI from './postImage.presenter';


export default function PostImage(props) {


    const [imageFile, setImageFile] = useState()
    const [imageUrl, setImgUrl] = useState()


    // 2023-08-24 박미지 --- 이미지 화면 등록 시 Data 저장, 화면에 띄워주기.
    const imgUpdate = (e) => {
        setImageFile(() => e.target.files[0] ? e.target.files[0] : '');
        setImgUrl((prevstate) => (e.target.files[0]) ? URL.createObjectURL(e.target.files[0]) : prevstate);
        if (e.target.files[0]) {
            props.getImageData(e.target.files[0], URL.createObjectURL(e.target.files[0]))
        }
    }

    // 2023-08-24 박미지 --- 이미지 삭제.
    const imageDelete = () => {
        setImageFile('')
        setImgUrl('')
    }

    useEffect(() => {
        if (imageFile) {
            // console.log(imageFile.name)
            // console.log(imageUrl)
        }

    })

    return (
        <>
            <PostImageUI
                getImageData={props.getImageData}
                imageUrl={imageUrl}
                imgUpdate={imgUpdate}
                imageDelete={imageDelete}
            />
        </>
    )
}