import styled from "@emotion/styled"

const NoticeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    width: 880px;
    height: 72px;

    background-color: var(--color-purple5);

    border: 1px solid var(--color-black7);
    border-radius: 8px;

    margin-bottom: 12px;
`
const NoticeIcon = styled.div`

    width: 80px;
    height: 32px;
    line-height: 32px;
    text-align: center;

    border: 1px solid var(--color-purple2);
    border-radius: 8px;

    color: var(--color-purple2);

    margin-left: 24px;
`

const NoticeTitle = styled.div`
    cursor: pointer;
`

export default function PostNoticeUI() {


    return(
        <>
            <NoticeBox>
                <NoticeIcon className="body2-bold">
                    공지사항
                </NoticeIcon>
                <NoticeTitle className="body2-medium">
                    공지사항 제목을 기입합니다.
                </NoticeTitle>
            </NoticeBox>
        </>
    )
}