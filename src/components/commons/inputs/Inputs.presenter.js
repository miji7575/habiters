// import inputStyles from '../../../../styles/input.module.css'
// import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'
// import { useState } from "react"





// // -----------

// export default function InputUI(props) {



//     return (
//         // html 부분을 여기에 담아라
//         <>
//             <InputWrap>

//                 <InputBox>
//                     {!props.isError &&
//                         <span
//                             className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}
//                             onClick={props.removeValue} />}
//                     <Input
//                         type="text"
//                         className={'input-default body3-medium color-black2'}
//                         width={props.width}
//                         isError={props.isError}
//                         onChange={(props.InputChange)}
//                         value={props.newInputVlaue}
//                         placeholder={props.placeholder} 
//                         ref={props.ref}/>

                        

//                     {props.isError &&
//                         <ErrorIcon
//                             className="icon-m icon-error-colored" />}
//                 </InputBox>
//                 <InputMessage id="name" className={'caption1-regular ${props.MessageColor}'}>{props.Message}</InputMessage>
//             </InputWrap>



//             {/* ===================================================== */}
//             <div>{props.inputValue}inputPresenter</div>

//             {/* ===================================================== */}
//         </>
//     )

// }