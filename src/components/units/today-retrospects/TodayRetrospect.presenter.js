
import { TodayRetrospectContainer, TextareaBox, TextareaDefault, TextareaTextCountBox } from './TodayRetrospect.styles'
import Textarea from '../../commons/textareas/Textareas.container';
import { useRecoilState } from 'recoil';
import {TextareaValueState} from '../../../commons/stores/Stores';


export default function TodayRetrospectUI(props) {




    return (

        <>

            <TodayRetrospectContainer>

                <div className="headline5 color-black1">오늘의 회고</div>

                    <Textarea 
                    multiline 
                    placeholder={props.placeholder}
                    textareaErrorMessage={props.textareaErrorMessage}
                    width={`239px`}
                    height={`272px`}

                    />
                {/* <TextareaBox>
                    
                    <TextareaDefault name="" id="" cols="30" rows="10" className="textarea-default body3-regular"
                        placeholder="오늘의 회고를 작성해주세요.&#13;&#10;작성한 회고는 24시간 이내로만 수정이 가능해요."></TextareaDefault>
                    <TextareaTextCountBox className="caption2-regular">
                        <span></span>
                        <span>0/200</span>
                    </TextareaTextCountBox>
                </TextareaBox> */}

                <div className="btn btn-large btn-primary-default body2-medium btn-width-auto"
                onClick={props.onPostRetrospectsBtnClick}>버튼</div>

            </TodayRetrospectContainer>
        </>
    )

}