import axios from "axios";

/**
 @why lalala
 @description 登录接口
 @param username 用户名
 @param password 密码
 @return {jwt,userid} 返回jwt和用户ID
**/
export default async function login(
    username: string,
    password: string
): Promise<{ jwt: string; userid: number }> {
    let jwt = "";
    let userid = 0;
    await axios({
        url: "/api/login",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        data: `username=${username}&password=${password}`,
    })
        .then((response) => {
            if (response.data.code == 0) {
                jwt = response.data.data.jwt;
                userid = response.data.data.userId;
            }
        })
        .catch((err) => {
            console.log(err);
        });
    return {jwt: jwt, userid: userid};
}
