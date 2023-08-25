import {
    ImageWrap, ImageLabel,
    SelectedImage, ThumbnailLabel, DeleteImageIcon, HiddenFileInput,

} from './postImage.styles';

export default function PostImageUI(props) {




    return (
        <>
            <div>
                <ImageWrap>
                    <ThumbnailLabel
                        onClick={(e) => { console.log("썸네일") }}
                    // isThumbnail={true}
                    > <span>대표</span>
                    </ThumbnailLabel>

                    {props.imageUrl &&
                        <DeleteImageIcon
                            onClick={() => { console.log("이미지 지우기"),props.imageDelete() }}
                        ><span></span> </DeleteImageIcon>}

                    <ImageLabel
                        onClick={(e) => {
                            console.log("FileInput")
                        }}
                    >

                        {props.imageUrl && <SelectedImage src={props.imageUrl} alt="PostImage" />}

                        <HiddenFileInput id="img" name="files" type="file" accept="image/*" onClick={() => { }}
                            onChange={props.imgUpdate}
                        />
                    </ImageLabel>
                </ImageWrap>
            </div>
        </>
    )
}