import styled from "@emotion/styled";
import { Bar } from "../../../commons/layout/footer/Footer.styles";
import { create } from "domain";

const UserDataBox = styled.div`
    width: 169px;
    height: 24px;

    display: inline-flex;
    align-items: center;
    gap: 8px;

`

const UserData = styled.div`
    width: 92px;

    display: flex;
    justify-content: center;
    gap: 4px;
`

export default function UserDataUI({createDate}) {


    // 게시글 리스트 날짜처리 (31일부터는 년.월.일로 표시)
    function elapsedText(createDate) {

        var date = new Date(createDate)

        // 초 (밀리초)
        const seconds = 1;
        // 분
        const minute = seconds * 60;
        // 시
        const hour = minute * 60;
        // 일
        const day = hour * 24;
        
        
        var today = new Date();
        var elapsedTime = Math.trunc((today.getTime() - date.getTime()) / 1000);
        // console.log(today)
        var elapsedText = "";
        if (elapsedTime < seconds) {
            elapsedText = "방금 전";
        } else if (elapsedTime < minute) {
            elapsedText = elapsedTime + "초 전";
        } else if (elapsedTime < hour) {
            elapsedText = Math.trunc((elapsedTime / minute) / 2) + "분 전";
        } else if (elapsedTime < day) {
            elapsedText = Math.trunc(elapsedTime / hour) + "시간 전";
        } else if (elapsedTime < (day * 30)) {
            elapsedText = Math.trunc(elapsedTime / day) + "일 전";
        } else {
            // 230806 날짜 구분값 '-'를 '.'으로 변경
            elapsedText = createDate.replace(/-/g, '.');
        }
        
        return elapsedText;
    }

    return(
        <UserDataBox>
            <UserData>
                <span>프사</span>
                <span>글 쓴 해비터</span>
            </UserData>
            <Bar />
            <div>
                {elapsedText(createDate)}
            </div>


        </UserDataBox>

    );
}