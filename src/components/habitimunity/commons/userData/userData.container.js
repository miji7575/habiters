import UserDataUI from "./userData.presenter";

export default function UserData({createDate, selectedImage}) {
    return(
        <UserDataUI
            createDate={createDate}
            selectedImage={selectedImage}
        />
    );
}