import { forwardRef } from 'react'
import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'





// -----------



// const InputUI = forwardRef(function InputUI(props, forwardedRef) {


export default function InputUI(props) {

    return (

        <>


            <InputWrap>

                <InputBox>

                    <Input 
                    placeholder={props.placeholder}
                    isError={props.isError}
                    width={props.width}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}

                    />

                   

                </InputBox>

                {props.isError && <InputMessage
                    isError={props.isError}>
                    {props.errorMessage}
                </InputMessage>}

            </InputWrap>



        </>
    )
}


// })
// export default InputUI