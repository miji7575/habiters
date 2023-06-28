// import inputStyles from '../../../../styles/input.module.css'
import {
    TextareaBox, TextareaBoxError,
    TextareaDefault, TextareaOn, TextareaError, TextareaNonEditable,
    TextareaExplain
} from './Textareas.styles'






// -----------

export default function TextareaUI(props) {
    

    return (
      
        <>
            {/* 입력 가능 */}
            {!props.todayRetrospectState && <TextareaBox
                width={props.width}
                margin={props.margin}
                isError={props.isError}
            >
                <TextareaDefault id="" cols="30" rows="10" className="body3-regular"
                    height={props.height}
                    placeholder={props.placeholder}

                    onChange={props.onChange}
                    // maxLength={200}
                    isError={props.isError}

                    value={props.value}
                    name={props.name}
                >

                </TextareaDefault>
                <TextareaExplain className="caption2-regular ">
                    <span>{props.textareaErrorMessage}</span>
                    <span><span>{props.textLength}</span>/200</span>
                </TextareaExplain>
            </TextareaBox>}




            {/* 읽기 전용 */}
            {props.todayRetrospectState && <TextareaBox
                width={props.width}
                margin={props.margin}
            >
                <TextareaDefault id="" cols="30" rows="10" className="body3-regular"
                    height={props.height}
                    placeholder={props.placeholder}

                    onChange={props.onChange}
                    // maxLength={200}
                    isError={props.isError}
                    disabled
                    todayRetrospectState={props.todayRetrospectState}

                    // value={props.value}
                    // name={props.name}
                
                >

                </TextareaDefault>
                <TextareaExplain className="caption2-regular ">
                    <span>{props.textareaErrorMessage}</span>
                    <span><span>{props.textLength}</span>/200</span>
                </TextareaExplain>
            </TextareaBox>}





        </>
    )

}