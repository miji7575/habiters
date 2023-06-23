import styled from "styled-components"
import Input from '../inputs/Inputs.container';




const PopupBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background: rgba(0, 0, 0, 0.8);
`

const PopupContainer = styled.div`
    width: 428px;
    box-sizing: border-box;
    padding: 40px 24px 40px 24px;
    border-radius: 24px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    /* box-shadow: 3px 3px 3px 3px black; */

    position: absolute;
    top: calc(50vh - (240px / 2));
    left: calc(50vw - (428px / 2));
    `

const PopupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    color: var(--color-black1);
    
    `

const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    `

const PopupBtn = styled.div`
    display: flex;
    justify-content: center;
    `






export default function Popup1BtnInput(props) {





    return (
        <>

            <PopupBackground>
                <PopupContainer>

                    <PopupTitle>
                        <span className="headline5">{props.popUpTitle}</span>
                        <span className="icon-l icon-close-line"
                            onClick={props.addNewHabitPopupClose}></span>
                    </PopupTitle>

                    <PopupContent>
                        <div>

                            <Input
                                name={props.inputName}
                                value={props.value}
                                placeholder={props.popUpPlaceHolder}
                                onChange={props.onChange}


                                isError={props.isError}
                                errorMessage={props.errorMessage}

                            />

                        </div>

                    </PopupContent>


                    <PopupBtn>
                        <div className="btn btn-large btn-primary-default body2-medium"
                            onClick={props.addNewhabit}>{props.popUpBtnText}</div>
                    </PopupBtn>

                </PopupContainer>
            </PopupBackground>

        </>
    )
}