
import {
    DiaryBox, DiaryAside, DiaryDateBox, DiaryIconBox, DiaryContent,
    IconDelete,IconUpdate
} from './Retrospect.styles'





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
                        <div>{props.day}</div>
                        <div>{props.date}</div>
                    </DiaryDateBox>

                    {/* -- EDITABLE -- */}
                    {props.isEditable &&
                        <DiaryIconBox>
                           
                            <IconUpdate
                                onClick={props.updateRetrospectsPopupOn}
                            />

                            <IconDelete
                                isEditable={props.isEditable}
                                onClick={props.deleteRetrospectsPopupOn} />

                        </DiaryIconBox>}

                    {/* -- NONEDITABLE -- */}
                    {!props.isEditable &&
                        <DiaryIconBox>
                            <IconDelete
                                isEditable={props.isEditable}
                                onClick={props.deleteRetrospectsPopupOn} />

                        </DiaryIconBox>}
                </DiaryAside>


                <DiaryContent>
                    <div>
                        {props.content}
                    </div>
                </DiaryContent>


            </DiaryBox>









        </>
    )

}