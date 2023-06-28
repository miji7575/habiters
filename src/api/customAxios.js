import axios, { AxiosInstance } from 'axios';
// import cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { userAccessToken } from '../components/stores';


// const SERVER_ADDRESS = 'https://api.habiters.store';
// const [accessToken, setAccessToken] = useRecoilState(userAccessToken)


// export const customAxios = axios.create({
//   baseURL: `${SERVER_ADDRESS}`, // 기본 서버 주소 입력
//   headers: {
//     "Content-Type": "application/json", Authorization: `Bearer ` + accessToken
//   },
// });