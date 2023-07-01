import { forwardRef } from 'react'
import inputStyles from '../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'





// -----------

// export default  function InputUI(props) {

const InputUI = forwardRef(function InputUI(props, forwardedRef) {

    
    return (

        <>
            <InputWrap>

                <InputBox>


                    {!props.isValueNull && props.isOnFocus && !props.isError &&
                        <span
                            id="removeBtn"
                            className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}
                            onClick={props.removeValue}
                            />}
                    <Input
                        ref={forwardedRef}
                        type="text"
                        className={'input-default body3-medium color-black2'}

                        isError={props.isError}
                        onChange={props.onChange}
                        value={props.value || ""}
                        placeholder={props.placeholder}
                        name={props.name}

                        disabled={props.isEditable ? true : false}
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

})

export default InputUI