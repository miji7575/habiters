import styled from "@emotion/styled"
import { useEffect, useState } from "react";



const LabelContent = styled.div`
    width: fit-content; // 글자길이에 맞게 width 설정

    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    font-family: 'Pretendard-Medium'; 
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    padding: 4px 8px;
`

const CheckIcon = styled.i`
    display: inline-block;
    width: 16px;
    height: 16px;

    margin-right: 4px;

    background-color: #A6A6A6;

    mask-size: 16px 16px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px 16px;

    mask-position: center;
    -webkit-mask-position: center;

    mask-image: url(/image/icon/icon-check.svg);
    -webkit-mask-image: url(/image/icon/icon-check.svg);
`

export default function LabelUI(props) {

    // 230729 check icon 활성화 여부
    const [checkIconActive, setCheckIconActive] = useState(false);

    // 230729 라벨 칼라옵션 저장, props로 칼라옵션을 입력해준다.
    const colorOptions = {
        skyBlue: {
            backgroundColor: 'var(--color-skyblue5)',
            color: 'var(--color-skyblue2)',
        },
        green: {
            backgroundColor: 'var(--color-green5)',
            color: 'var(--color-green2)',
        },
        purple: {
            backgroundColor: 'var(--color-purple5)',
            color: 'var(--color-purple2)',
        },
        gray: {
            backgroundColor: 'var(--color-black8)',
            color: 'var(--color-black3)',
        },
        purpleBg: {
            backgroundColor: 'var(--color-purple2)',
            color: 'var(--color-white)',
        },
        white: {
            backgroundColor: 'var(--color-white)',
            color: 'var(--color-black4)',
        },
        orange: {
            backgroundColor: '#FBF3E4',
            color: '#E29A0C',
        },
    };

    // 230729 icon이 입력될때 확인 props로 icon의 속성을 넘겨준다.
    useEffect(() => {
        if (props.icon === 'check') {
            setCheckIconActive(true);
        }

        console.log(props.icon)

    }, [props.icon])

    // 230729 기본칼라 세팅
    const defaultColor = colorOptions[props.default] || colorOptions['white'];

    return (
        <>
            <LabelContent
                style={{
                    backgroundColor: defaultColor.backgroundColor,
                    color: defaultColor.color
                }}
            >
                {checkIconActive && <CheckIcon
                    style={{
                        backgroundColor: defaultColor.color
                    }}
                />}
                <div>
                    {props.value}
                </div>
            </LabelContent>
        </>
    );
}