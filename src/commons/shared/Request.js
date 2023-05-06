import axios from "axios";

const instance = axios.create({
	baseURL: "http://223.130.162.40:8080" // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록

});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN; 


export default instance;