import styled from "@emotion/styled"

const NoticeContainer = styled.div`

`

const NoticeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    width: 880px;
    height: 72px;

    background-color: #F4F1FE;

    border: 1px solid #DBDBDB;
    border-radius: 16px;

    margin-bottom: 12px;
`
const NoticeIcon = styled.div`
    // display: inline-block;

    width: 80px;
    height: 32px;
    line-height: 32px;
    text-align: center;

    border: 1px solid #937CF1;
    border-radius: 8px;

    color: #937CF1;
    font-weight: bold;

    margin-left: 24px;
`

export default function HabitimunityNoticeUI() {




    return(
        <>
            <NoticeContainer>
                <NoticeBox>
                    <NoticeIcon>
                        공지사항
                    </NoticeIcon>
                    <div>
                        <a href="#">
                            공지사항 제목을 기입합니다.
                        </a>
                    </div>
                </NoticeBox>
                <NoticeBox>
                    <NoticeIcon>
                        공지사항
                    </NoticeIcon>
                    <div>
                        <a href="#">
                            공지사항 제목을 기입합니다.
                        </a>
                    </div>
                </NoticeBox>
                <NoticeBox>
                    <NoticeIcon>
                        공지사항
                    </NoticeIcon>
                    <div>
                        <a href="#">
                            공지사항 제목을 기입합니다.
                        </a>
                    </div>
                </NoticeBox>
            </NoticeContainer>
        </>
    )
}