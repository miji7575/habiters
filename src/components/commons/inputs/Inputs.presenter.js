import { forwardRef } from 'react'
import inputStyles from '../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, CloseIcon, ErrorIcon } from './Inputs.styles'





// -----------

// export default  function InputUI(props) {

const InputUI = forwardRef(function InputUI(props, forwardedRef) {

    
    return (

        <>
            <InputWrap>

                <InputBox>


                    {!props.isValueNull && props.isOnFocus && !props.isError &&
                        <CloseIcon
                            id="removeBtn"
                            onClick={props.removeValue}
                            />}
                    <Input
                        ref={forwardedRef}
                        type="text"
                        className={'body3-medium color-black2'}

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
                            onClick={props.onFocus} />}
                </InputBox>
                {props.isError && <InputMessage id="name" className={'caption1-regular'}>{props.errorMessage}</InputMessage>}
            </InputWrap>



        </>
    )

})

export default InputUI