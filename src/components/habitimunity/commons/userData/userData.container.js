import UserDataUI from "./userData.presenter";

export default function UserData({createDate}) {
    return(
        <UserDataUI
            createDate={createDate}
        />
    );
}