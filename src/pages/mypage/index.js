import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userState, userDetail, InputValue, userHabitState, userRetrospectData, SelectedDate, TodayRetrospectState } from '../../components/stores';
import axios from 'axios'


import Input from '../../components/commons/inputs/Inputs.container';
import UpdateDonePopup from './update-done-popup/UpdateDonePopup';



// ============================== Style ==============================

const Main = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-bottom: 200px;
 `

const Title = styled.div`
  padding: 72px 0 58px 0 ;
  color: var(--color-black1);
 `
const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const Label = styled.div`
color: var(--color-black1);
`
const MyImgWrap = styled.div`
 position: relative;
 `
const MyImg = styled.img`
  width: 130px;
 height: 130px;

 box-sizing: border-box;
 border: 1px solid var(--color-black7);
 border-radius: 75px;
 object-fit: none;
 /* ${(props) => props.src === "/image/image-default.svg" ? `object-fit: none` : `object-fit: fill`}; */
 `
const MyImgUpdateIcon = styled.span`
 position: absolute;
 background-color: var(--color-white);
 bottom: 5px;
 left: 98px;
 `

const MypageInputWrap = styled.div`
 display: flex;
 flex-direction: column;
 gap: 32px;
 padding-bottom: 56px;
 padding-top: 40px;
 `
const MypageInputBox = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
 `

const NickNameInputBox = styled.div`
  display: flex;
 width: 380px;
 `

const NickNameUpdateBtn = styled.div`
     margin-left: 8px;
     width: 80px;
 
 `
export default function MyPage() {

    // 1. 검증하기
    //2. 백엔드컴터에보내주기
    //3. 성공알람 보여주기.


    // ============================== Function  ==============================
    const router = useRouter()
    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }
    }, [])

    const onClickMoveDeleteAccount = () => {
        router.push("/delete-account")
    }





    const [emailInputPlaceHolder, setEmailInputPlaceHolder] = useState("이메일 주소를 입력해주세요. ex)habiters@gmail.com");
    const [nicknameInputPlaceHolder, setNicknamePlaceHolder] = useState("닉네임을 입력해주세요.");
    const [isEditable, setIsEditable] = useState(true)


    const [user, setUser] = useRecoilState(userDetail)

    // ----- 초기값 설정하기
    useEffect(() => {

        if (user.profileImgUrl) {
            setProfileImgUrl(user.profileImgUrl)
        }

        setInputValues({ ["nickName"]: user.nickName })
        if (user.email != null) {
            setEmailInputPlaceHolder(user.email)
            setInputValues({
                ["nickName"]: user.nickName,
                //  ["email"]: user.email
            })
        }
    }, [])


    // ------- 수정 완료 팝업
    const [updateDonePopupStatus, setUpdatePopupStatus] = useState(false)
    const [popUp, setPopUp] = useState({
        messageTitle: '닉네임 수정 완료',
        content: '변경하신 닉네임으로 수정이 완료되었어요.'
    })


    const updateDonePopupClose = () => {

        setUpdatePopupStatus(false)
    }






    //  ----- Axios get -- 회원정보 가져오기
    const getUserData = async () => {

        if (accessToken) {
            const response = await axios.get('https://api.habiters.store/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            setUser(response.data.data)
            // console.log(response)
            return
        }
    }



    // --------------------회원정보 수정하기
    const formData = new FormData()
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const updateUser = async () => {

        if (!nickName) {

            setIsError(true)
            setErrorMessage("닉네임을 입력해주세요")
            return
        }
        else if (user.nickName == nickName) {

            setIsError(true)
            setErrorMessage("기존 닉네임과 동일합니다")
            return
        }

        else {

            setUpdatePopupStatus(true)
            await updateUserData()
            await getUserData()
        }

    }



    const nickNameCheck = () => {
        // console.log(nickName.toString().length)
        if (!nickName) {
            setIsError(true)
            setErrorMessage("닉네임을 입력해주세요")
            return
        }
        if (nickName.toString().length >= nickNameLength) {
            setIsError(true)
            setErrorMessage("닉네임은 12자 이내로 입력해주세요.")
        }
        // else if (user.nickName == nickName) {
        //     // alert("기존 닉네임과 동일합니다")
        //     setIsError(true)
        //     setErrorMessage("기존 닉네임과 동일합니다")
        //     return
        // }
        else {
            setIsError(false)
            setErrorMessage("")
        }


    }




    // =========================INPUT

    const [inputValues, setInputValues] = useRecoilState(InputValue)
    const { email, nickName } = inputValues; // 비구조화 할당을 통해 값 추출
    const nickNameLength = 12;

    const onChangeRecoil = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputValues({
            ...inputValues, // 기존의 input 객체를 복사한 뒤
            [name]: value // [name]: value // name 키를 가진 값을 value 로 설정
        });


    };

    useEffect(() => {
        nickNameCheck()
    }, [nickName])


    //  -----  이미지 로드
    const [profileImgUrl, setProfileImgUrl] = useState('');
    const [imageFile, setImageFile] = useState()

    const imgUpdate = (e) => {
        setImageFile(e.target.files[0]);
        setProfileImgUrl(URL.createObjectURL(e.target.files[0]));

    }



    //  ----- Axios put(update) -- 회원정보 수정
    const [accessToken, setAccessToken] = useRecoilState(userState)

    const updateUserData = async () => {


        if (accessToken) {


            const response = await axios.put(`https://api.habiters.store/users/me`,
                {
                    // "email" : email,
                    "nickName": nickName,
                    // "profileImgUrl": profileImgUrl
                }
                // formData
                , {
                    headers: { "Content-Type": 'application/json', Authorization: 'Bearer ' + accessToken }
                })
                .then(
                    setPopUp({ messageTitle: '닉네임 수정 완료', content: '변경하신 닉네임으로 수정이 완료되었어요.' })
                )
                .catch(function (error) {
                    if (error.response) { // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                        // console.log(error.response.data.msg);

                        setPopUp({ messageTitle: '닉네임 수정 실패', content: error.response.data.msg })
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                        return
                    } else if (error.request) {
                        // 요청이 전송되었지만, 응답이 수신되지 않았습니다. 
                        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
                        // node.js에서는 http.ClientRequest 인스턴스입니다.

                        // console.log(error.request);
                        return
                    } else {
                        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.

                        // console.log('Error', error.message);

                    }


                    // console.log(error.config);
                    return
                });



            console.log("항상 나오나?")
            console.log(response)



        }
    }




    // -----------로그아웃
    // const [userDetail,setUserDetail] = useRecoilState(userDetail)
    const [userHabit, setUserHabit] = useRecoilState(userHabitState)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)
    const [Selected, setSelected] = useRecoilState(SelectedDate)
    const [TodayRetrospect, setTodayRetrospect] = useRecoilState(TodayRetrospectState)
    // const [userState,setUserState] = useRecoilState(userState)



    const logout = async () => {
        setUser();
        setUserHabit();
        setUserRetrospect();
        setSelected();
        setTodayRetrospect();
        setAccessToken();
        router.push("/")
    }








    return (
        <>
            <main>

                <Main>

                    <Title className={'headline1'}>
                        마이페이지
                    </Title>
                    <Form method="post" enctype="multipart/form-data" >
                        <MyImgWrap>
                            <label>
                                <MyImg src={profileImgUrl} alt="프로필이미지" />
                                {/* {!profileImgUrl && <MyImg src="/image/image-default.svg" alt="프로필이미지" />} */}
                                {/* <MyImg src="/image/image-default.svg" alt="프로필이미지" /> */}
                                {/* <input className="d-none" id="img" name="files" type="file" accept="image/*" onChange={imgUpdate} /> */}
                                {/* <MyImgUpdateIcon className={'icon-round-l'} >
                                    <span className={'icon-s icon-pencil'}></span>
                                </MyImgUpdateIcon> */}
                            </label>


                        </MyImgWrap>

                        <MypageInputWrap>
                            <MypageInputBox>
                                <Label className={'body1-bold'}>
                                    이메일
                                </Label>


                                <div>


                                    <Input
                                        name="email"
                                        onChange={onChangeRecoil}
                                        value={email}
                                        placeholder={emailInputPlaceHolder}
                                        isEditable={isEditable}

                                    ></Input>


                                </div>


                            </MypageInputBox>

                            <MypageInputBox>
                                <Label className={'body1-bold'}>
                                    닉네임
                                </Label>

                                <NickNameInputBox>
                                    <div>
                                        <Input
                                            name="nickName"
                                            onChange={onChangeRecoil}
                                            value={nickName}
                                            placeholder={nicknameInputPlaceHolder}
                                            width={`292px`}
                                            isError={isError}
                                            errorMessage={errorMessage}
                                            length={nickNameLength}

                                        ></Input>

                                    </div>
                                    <NickNameUpdateBtn className="body2-medium btn btn-large btn-primary-default btn-width-fit-content"
                                        onClick={updateUser}>
                                        <span>수정</span>
                                    </NickNameUpdateBtn>
                                </NickNameInputBox>
                            </MypageInputBox>
                        </MypageInputWrap>


                    </Form>

                   

                    <div className="btn-arrange-vertical">
                        <div>
                            <div className="btn btn-large btn-primary-default body2-medium"
                                onClick={logout}>로그아웃</div>
                        </div>
                        <div>
                            <div className="btn btn-large btn-secondary-default body2-medium"
                                onClick={onClickMoveDeleteAccount}>탈퇴하기</div>
                        </div>
                    </div>

                </Main>

                {/* 수정완료 팝업 */}
                {updateDonePopupStatus && <UpdateDonePopup
                    popUp={popUp}
                    updateDonePopupClose={updateDonePopupClose} />}

            </main>
        </>

    )
}