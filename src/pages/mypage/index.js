import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userAccessToken, userDetail, InputValue, userHabitState, userRetrospectData, SelectedDate, TodayRetrospectState } from '../../components/stores';
import axios from 'axios'


import Input from '../../components/commons/inputs/Inputs.container';
import UpdateDonePopup from './update-done-popup/UpdateDonePopup';
import createMixins from '@material-ui/core/styles/createMixins';



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
  /* headline1 */
  font-family: 'Pretendard-Bold'; 
  font-size: 40px;
  line-height: 52px;
 `


const Label = styled.div`
color: var(--color-black1);
/* body1-bold */
  font-family: 'Pretendard-Bold'; 
  font-size: 18px;
  line-height: 26px;

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


const BtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    `
const BtnLarge = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--color-purple2);
    text-align: center;
    transition: all .3s;
    cursor: pointer;

    width: 380px;
    height: 48px;
    box-sizing: border-box;
    padding: 12px 16px 12px 16px;

    /* body2-medium */
    font-family: 'Pretendard-Medium'; 
    font-size: 16px;
    line-height: 24px;

    :hover {
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.08);
}

`

const BtnLargePrimary = styled(BtnLarge)`
    background-color: var(--color-purple2);
    color: var(--color-white);
    border: 1px solid var(--color-purple2);
`

const BtnLargeSecondary = styled(BtnLarge)`
    background-color: var(--color-white);
    color: var(--color-purple2);
    border: 1px solid var(--color-purple2);
`

const NickNameUpdateBtn = styled(BtnLargePrimary)`
     margin-left: 8px;
     width: 80px;
 
 `

const LogoutLink = styled.a`
text-decoration: none;
  :visited{ color: inherit; }
  :link{ color: inherit; }
  :hover{ color:inherit; }
  :active{ color: inherit; }

`


export default function MyPage() {

    // 1. 검증하기
    //2. 백엔드컴터에보내주기
    //3. 성공알람 보여주기.

    // useEffect(()=>{
    //     console.log(inputValues)
    // })

    // ============================== Function  ==============================
    const [user, setUser] = useRecoilState(userDetail)
    //  ----- Axios get -- 회원정보 가져오기
    const getUserData = async () => {

        if (accessToken) {
            const response = await axios.get('https://api.habiters.store/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            setUser(response.data.data)

            return
        }
    }



    const router = useRouter()
    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }
        getUserData()
    }, [])

    const onClickMoveDeleteAccount = () => {
        router.push("/delete-account")
    }





    const [emailInputPlaceHolder, setEmailInputPlaceHolder] = useState("이메일 주소를 입력해주세요. ex)habiters@gmail.com");
    const [nicknameInputPlaceHolder, setNicknamePlaceHolder] = useState("닉네임을 입력해주세요.");
    const [isEditable, setIsEditable] = useState(true)




    // ----- 초기값 설정하기
    useEffect(() => {

        // if (user.profileImgUrl) {
        //     setProfileImgUrl(user.profileImgUrl)
        // }
        setProfileImgUrl(user.profileImgUrl)
        setInputValues({ ["nickName"]: user.nickName })
        if (user.email != null) {
            setEmailInputPlaceHolder(user.email)
            setInputValues({
                ["nickName"]: user.nickName,
                //  ["email"]: user.email
            })
        }

    }, [user])


    // ------- 수정 완료 팝업
    const [updateDonePopupStatus, setUpdatePopupStatus] = useState(false)
    const [popUp, setPopUp] = useState({
        summary: '닉네임 수정 완료',
        content: '변경하신 닉네임으로 수정이 완료되었어요.'
    })


    const updateDonePopupClose = () => {

        setUpdatePopupStatus(false)
    }










    // --------------------회원정보 수정하기

    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const updateUser = async () => {
        // console.log(isError)
        if (!nickName) {

            setIsError(true)
            setErrorMessage("닉네임을 입력해주세요")
            return
        }
        if (user.nickName == nickName) {

            setIsError(true)
            setErrorMessage("기존 닉네임과 동일합니다. 확인해주세요.")
            return
        }
        if (nickName.toString().length > nickNameLength) {
            setIsError(true)
            setErrorMessage("닉네임은 12자 이내로 입력해주세요.")
            return
        }


        else {

            const updateUser = await updateUserData()
            await getUserData()
            if (updateUser) { //정상적으로 실행되었을 때
                setUpdatePopupStatus(true)
                return
            }
            else { //에러가 발생했을 때
                return
            }
        }

    }



    const nickNameCheck = () => {
        // console.log(nickName.toString().length)
        if (!nickName) {
            setIsError(true)
            setErrorMessage("닉네임을 입력해주세요")
            return
        }
        if (nickName.toString().length > nickNameLength) {
            setIsError(true)
            setErrorMessage("닉네임은 12자 이내로 입력해주세요.")
        }

        else {
            setIsError(false)
            setErrorMessage("")
        }


    }




    // =========================INPUT

    const [inputValues, setInputValues] = useRecoilState(InputValue)
    const { email, nickName } = inputValues; // 비구조화 할당을 통해 값 추출
    const nickNameLength = 12;


    // 값 변경은 Input 컴포넌트에서 처리하도록 함.
    // const onChangeRecoil = (e) => {
    //     const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    //     setInputValues({
    //         ...inputValues, // 기존의 input 객체를 복사한 뒤
    //         [name]: value // [name]: value // name 키를 가진 값을 value 로 설정
    //     });
    // };

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
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)

    const updateUserData = async () => {





        const response = await axios.put(`https://api.habiters.store/users/me`,
            {
                // "email" : email,
                "nickName": nickName,
                // "profileImgUrl": profileImgUrl
            }
            // formData
            , {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer ' + accessToken,
                }
            })
            .then(
                setPopUp({ summary: '닉네임 수정 완료', content: '변경하신 닉네임으로 수정이 완료되었어요.' })
            )
            .catch(function (error) {
                if (error.response) { // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                    // console.log(error.response.data.msg);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);

                    // setPopUp({ summary: '닉네임 수정 실패', content: error.response.data.msg })
                    setIsError(() => true)
                    setErrorMessage("이미 사용중인 닉네임입니다. 다른 이름을 입력해주세요.")

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
                    return

                }


                // console.log(error.config);
                return
            })



        // console.log("항상 나오나?")
        console.log(response)








        return response



    }





    // -----------로그아웃
    // const [userDetail,setUserDetail] = useRecoilState(userDetail)
    const [userHabit, setUserHabit] = useRecoilState(userHabitState)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)
    const [Selected, setSelected] = useRecoilState(SelectedDate)
    const [TodayRetrospect, setTodayRetrospect] = useRecoilState(TodayRetrospectState)
    // const [persistAtom, setPersistAtom] = useRecoilState(persistAtom)
    // const [userState,setUserState] = useRecoilState(userState)



    const logout = async () => {

        //     await KakaoLogout()
        window.sessionStorage.clear();
        //     await router.push("/");

    }

    // const KakaoLogout = async () => {

    //     const response = await axios.post(`https://kapi.kakao.com/v1/user/logout`,

    //         {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //                 "Content-Type": "application/x-www-form-urlencoded"
    //             }
    //         }
    //     )

    //     return response

    // }

    // const KakaoLogout = async () => {


    //     const client_id = "58a5cd8f1a8ca897c3509e973e68767f"

    //     const response = await axios.get(`https://kauth.kakao.com/oauth/logout?client_id=58a5cd8f1a8ca897c3509e973e68767f&logout_redirect_uri=https://habiters.vercel.app`,
    //         // {
    //         //     "client_id": client_id,
    //         //     "logout_redirect_uri": "https://habiters.vercel.app"
    //         // },
    //         {
    //             headers: { Authorization: 'Bearer ' + accessToken },
    //             "Access-Control-Allow-Origin": '*'
    //         }
    //     )

    //     console.log(response)
    //     return response

    // }




    return (
        <>
            <main>

                <Main
                >

                    <Title>
                        마이페이지
                    </Title>

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
                            <Label>
                                이메일
                            </Label>


                            <div >


                                <Input

                                    name="email"
                                    // onChange={onChangeRecoil} 없어도 되네..
                                    value={email}
                                    placeholder={emailInputPlaceHolder}
                                    isEditable={isEditable}





                                ></Input>


                            </div>


                        </MypageInputBox>

                        <MypageInputBox>
                            <Label>
                                닉네임
                            </Label>

                            <NickNameInputBox>
                                <div>
                                    <Input
                                        name="nickName"
                                        // onChange={onChangeRecoil}
                                        value={nickName}
                                        placeholder={nicknameInputPlaceHolder}
                                        width={`292px`}
                                        isError={isError}
                                        errorMessage={errorMessage}
                                    // length={nickNameLength}

                                    ></Input>

                                </div>
                                <NickNameUpdateBtn onClick={updateUser}>
                                    <span>수정</span>
                                </NickNameUpdateBtn>
                            </NickNameInputBox>
                        </MypageInputBox>
                    </MypageInputWrap>






                    <BtnWrap>
                        <div>
                            <BtnLargePrimary onClick={logout}>
                                {/* 로그아웃 */}
                                <LogoutLink href='https://kauth.kakao.com/oauth/logout?client_id=58a5cd8f1a8ca897c3509e973e68767f&logout_redirect_uri=https://habiters.vercel.app'>로그아웃</LogoutLink>
                            </BtnLargePrimary >

                        </div>
                        <div>
                            <BtnLargeSecondary onClick={onClickMoveDeleteAccount}>탈퇴하기</BtnLargeSecondary>
                        </div>
                    </BtnWrap>

                </Main>

                {/* 수정완료 팝업 */}
                {updateDonePopupStatus && <UpdateDonePopup
                    popUp={popUp}
                    updateDonePopupClose={updateDonePopupClose} />}

            </main>
        </>

    )
}