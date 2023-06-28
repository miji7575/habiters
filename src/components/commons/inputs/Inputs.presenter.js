import inputStyles from '../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'





// -----------

export default function InputUI(props) {



    return (

        <>
            <InputWrap  >

                <InputBox
                    ref={props.ref}
                    
                >
                    {!props.isValueNull && props.isOnFocus && !props.isError &&
                        <span
                            className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}
                            onClick={props.removeValue} />}
                    <Input
                        type="text"
                        className={'input-default body3-medium color-black2'}

                        isError={props.isError}
                        onChange={props.onChange}
                        value={props.value}
                        placeholder={props.placeholder}
                        name={props.name}

                        disabled={props.isEditable ? true : false}
                        onFocus={props.onFocus}

                        // onBlur={()=>setIsOnFocus(false)}
                        width={props.width}
                        maxLength={props.length}
                    



                    />




                    {props.isError &&
                        <ErrorIcon
                            className="icon-m icon-error-colored"
                            onClick={props.onFocus} />}
                </InputBox>
                {props.isError && <InputMessage id="name" className={'caption1-regular color-error'}>{props.errorMessage}</InputMessage>}
            </InputWrap>



        </>
    )

}