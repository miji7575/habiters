import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { userAccessToken, userDetail } from "../../../stores";
import axios from "axios";
import { useEffect } from "react";


const UserProfileContainer = styled.div`
    min-width: 280px;
    height: 230px;

    border: 1px solid #DBDBDB;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
`


const UserProfileContent = styled.div`
    width: 240px;
    height: 194px;

    display: flex;
    flex-direction: column;
    gap: 24px;

`

const NickName = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    gap: 12px;
`
const UserImageBox = styled.div`
    width: 40px;
    height: 40px;

    display: inline-flex;
    align-items: center;
    justify-content: center;


    box-sizing: border-box;
    border: 1px solid var(--color-black7);
    border-radius: 50%;
 `
const UserImage = styled.img`
    width: 25px;
    height: 25px;
`

const CountBox = styled.div`
    height: 58px;
    display: flex;
    justify-content: space-between;
    gap: 9px;
`
const CountContent = styled.div`
    width: 74px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`
const CountTitle = styled.div`

`

export default function UserProfileUI() {
    const [user, setUser] = useRecoilState(userDetail)

    return (
        <UserProfileContainer>
            <UserProfileContent>
                <NickName className="headline5">
                    <UserImageBox>
                        <UserImage src={user.profileImgUrl} />
                    </UserImageBox>
                    {user.nickName}
                </NickName>
                <CountBox>
                    <CountContent>
                        <CountTitle className="caption1-medium">북마크한 글</CountTitle>
                        <span className="headline3">0</span>
                    </CountContent>
                    <CountContent>
                        <CountTitle className="caption1-medium">작성한 글</CountTitle>
                        <span className="headline3">00</span>
                    </CountContent>
                    <CountContent>
                        <CountTitle className="caption1-medium">작성한 댓글</CountTitle>
                        <span className="headline3">0000</span>
                    </CountContent>
                </CountBox>
                <button
                    className="btn btn-large btn-primary-default body2-medium"
                    style={{width: '100%'}}
                >
                    게시글 작성하기
                </button>

            </UserProfileContent>
        </UserProfileContainer>

    );
}