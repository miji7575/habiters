import styled from '@emotion/styled'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userState, userDetail, InputValue } from '../../commons/stores/Stores';
import axios from 'axios'


import Input from '../../components/commons/inputs/Inputs.container';




// ============================== Style ==============================

const Main = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-bottom: 200px;
 `

const Title = styled.div`
  padding: 72px 0 58px 0 ;
 `
const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
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
 ${(props) => props.src === "/image/image-default.svg" ? `object-fit: none` : `object-fit: fill`};
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
        if (user.email) {
            setEmailInputPlaceHolder(user.email)
            setInputValues({
                ["nickName"]: user.nickName,
                //  ["email"]: user.email
            })
        }
    }, [])





    
    //  ----- Axios get -- 회원정보 가져오기
    const getUserData = async () => {

        if (accessToken) {
            const response = await axios.get('https://api.habiters.store/users/me', {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            setUser(response.data.data)
            console.log(response)
            return
        }
    }



    // --------------------회원정보 수정하기
    const updateUser = async () => {
        await updateUserData()
        getUserData()
    }



    // =========================INPUT

    const [inputValues, setInputValues] = useRecoilState(InputValue)
    const { email, nickName } = inputValues; // 비구조화 할당을 통해 값 추출

    const onChangeRecoil = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputValues({
            ...inputValues, // 기존의 input 객체를 복사한 뒤
            [name]: value // [name]: value // name 키를 가진 값을 value 로 설정
        });
    };




    //  -----  이미지 로드
    const [profileImgUrl, setProfileImgUrl] = useState('');

    const imgUpdate = (e) => {
        let imageFile = e.target.files[0];
        setProfileImgUrl(URL.createObjectURL(imageFile));

    }



    //  ----- Axios put(update) -- 회원정보 수정
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const formData = new FormData()
    formData.append('nickName', nickName);
    formData.append('file', profileImgUrl);



    const updateUserData = async () => {

        if (accessToken) {
           
            const response = await axios.put(`https://api.habiters.store/users/me`, 
            // {
            //     // "email" : email,
            //     "nickName": nickName,
            //     "profileImgUrl": profileImgUrl
            // }
            formData
            , {
                headers: { "Content-Type": 'multipart/form-data', Authorization: 'Bearer ' + accessToken }
            })
            console.log(response)
            return
        
        }
    }




    return (
        <>
            <main>

                <Main>

                    <Title className={'headline1'}>
                        마이페이지
                    </Title>
                    <Form method="post" enctype="multipart/form-data">
                        <MyImgWrap>
                            <label>
                                {profileImgUrl && <MyImg src={profileImgUrl} alt="프로필이미지" />}
                                {!profileImgUrl && <MyImg src="/image/image-default.svg" alt="프로필이미지" />}
                                <input className="d-none" id="img" name="files" type="file" accept="image/*" onChange={imgUpdate} />
                                <MyImgUpdateIcon className={'icon-round-l'} >
                                    <span className={'icon-s icon-pencil'}></span>
                                </MyImgUpdateIcon>
                            </label>


                        </MyImgWrap>

                        <MypageInputWrap>
                            <MypageInputBox>
                                <div className={'body1-bold'}>
                                    이메일
                                </div>
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
                                <div className={'body1-bold'}>
                                    닉네임
                                </div>

                                <NickNameInputBox>
                                    <div>
                                        <Input
                                            name="nickName"
                                            onChange={onChangeRecoil}
                                            value={nickName}
                                            placeholder={nicknameInputPlaceHolder}
                                            width={`292px`}

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
                            <div className="btn btn-large btn-primary-default body2-medium">로그아웃</div>
                        </div>
                        <div>
                            <div className="btn btn-large btn-secondary-default body2-medium"
                                onClick={onClickMoveDeleteAccount}>탈퇴하기</div>
                        </div>
                    </div>

                </Main>



            </main>
        </>

    )
}