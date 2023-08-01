import styled from "@emotion/styled";
import { Bar } from "../../../commons/layout/footer/Footer.styles";

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

export default function UserDataUI() {
    return(
        <UserDataBox>
            <UserData>
                <span>프사</span>
                <span>글 쓴 해비터1</span>
            </UserData>
            <Bar />
            <div>
                2023.06.19
            </div>


        </UserDataBox>

    );
}