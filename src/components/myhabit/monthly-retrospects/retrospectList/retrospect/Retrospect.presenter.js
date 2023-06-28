
import { DiaryBox, DiaryAside, DiaryDateBox, DiaryIconBox, DiaryContent } from './Retrospect.styles'


export default function RetrospectUI(props) {



    return (

        <>

            <DiaryBox>
                <DiaryAside
                    isEditable={props.isEditable}/* 수정 가능한 UI로 변경위한 State */
                >
                    <DiaryDateBox
                        isEditable={props.isEditable}/* 수정 가능한 UI로 변경위한 State */
                    >
                        <div className="body3-regular">{props.day}</div>
                        <div className="headline2">{props.date}</div>
                    </DiaryDateBox>

                    {/* -- EDITABLE -- */}
                    {props.isEditable &&
                        <DiaryIconBox>
                            <span className="icon-round-l icon-round-filled"
                                onClick={props.updateRetrospectsPopupOn}>
                                <span className="icon-s icon-pencil-colored"></span>
                            </span>
                            <span className="icon-round-l bg-white icon-round-border-purple2"
                                onClick={props.deleteRetrospectsPopupOn}>
                                <span className="icon-s icon-delete-colored"></span>
                            </span>
                        </DiaryIconBox>}

                    {/* -- NONEDITABLE -- */}
                    {!props.isEditable &&
                        <DiaryIconBox>
                            <span className="icon-round-l bg-white icon-round-border-black4"
                                onClick={props.deleteRetrospectsPopupOn}>
                                <span className="icon-s icon-delete-colored icon-color-black4"></span>
                            </span>
                        </DiaryIconBox>}
                </DiaryAside>


                <DiaryContent>
                    <div className="body3-regular color-black2">
                        {props.content}
                    </div>
                </DiaryContent>


            </DiaryBox>









        </>
    )

}