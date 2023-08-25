import {
    PostImageUploader,
    ImageWrap, ImageLabel,
    SelectedImage, ThumbnailLabel, DeleteImageIcon, HiddenFileInput,

} from './postImageVer2.styles';

export default function PostImageUI(props) {






    return (
        <>
            {props.imageUrl.map((data, index) =>

                <div
                    key={index}>
                    {props.imageUrl[index] &&
                        <ImageWrap
                        >
                            {/* 썸네일 체크 버튼 */}
                            <ThumbnailLabel
                                onClick={(e) => { props.thumbNailUpdate(data.id) }}
                                isThumbnail={data.isThumbnail}
                            > <span>대표</span>
                            </ThumbnailLabel>


                            {/* 이미지 삭제 버튼 */}
                            {props.imageUrl[index] &&
                                <DeleteImageIcon
                                    onClick={() => { props.imageDelete(data.id) }}
                                ><span></span> </DeleteImageIcon>}

                            <ImageLabel>
                                {/* 전송할 이미지 미리보기 */}
                                {props.imageUrl[index] && <SelectedImage src={props.imageUrl[index].FileUrl} alt="PostImage" />}

                                <HiddenFileInput id="img" name="files" type="file" accept="image/*" onClick={() => { }}
                                    onChange={(e) => props.imageUpdate(e, data.id)}
                                />
                            </ImageLabel>
                        </ImageWrap>

                    }
                </div>


            )}


        </>
    )
}