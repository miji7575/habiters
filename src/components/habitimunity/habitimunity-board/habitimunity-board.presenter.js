import styled from "@emotion/styled"

const BoardContainer = styled.div`

`

const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 880px;
    height: 208px;

    border: 1px solid #DBDBDB;
    border-radius: 16px;

    

`

const BoardTitle = styled.div`
    display: flex;
    justify-content: space-between;

    width: 832px;
    padding-top: 24px;
    padding-bottom: 16px;

`

const BoardContent = styled.div`
    width: 832px;
    min-height: 72px;
    max-height: 72px;
    
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5rem;


    margin-bottom: 24px;
`

const BoardSub = styled.div`
    display: flex;
    justify-content: space-between;

    width: 832px;
    border-top: 1px solid #DBDBDB;

    padding-top: 12px;

`

export default function HabitimunityBoardUI() {


    return (
        <>
            <BoardContainer>
                <BoardBox>
                    <BoardTitle>
                        <strong>
                            <a href="#">
                                제목을 기입해줍니다.
                            </a>
                        </strong>
                        <div>북마크</div>
                    </BoardTitle>
                    <BoardContent>
                        <a href="#">
                        내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.
                        내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.
                        내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.내용을 기입해줍니다.
                        </a>
                    </BoardContent>
                    <BoardSub>
                        <div>
                            <span>
                                작성자
                            </span>
                            <span>
                                category
                            </span>
                            <span>
                                1일전
                            </span>
                        </div>
                        <div>
                            아이콘
                        </div>
                    </BoardSub>
                </BoardBox>

            </BoardContainer>
        
        </>

    )
}