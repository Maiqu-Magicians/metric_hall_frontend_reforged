import axios from "axios";
import UserInfo from "../../entity/userInfo";

export default async function getInfo(userid: number): Promise<UserInfo> {
    let result = new UserInfo("未登录", 0, "", "", "", "","");
    await axios({
        url: `/api/user/queryById/${userid}`, method: "GET"
    })
        .then((response) => {
            result = new UserInfo(
                response.data.data.nickname,
                response.data.data.id,
                response.data.data.backImg,
                response.data.data.avatar,
                response.data.data.email,
                response.data.data.phone,
                response.data.data.signature
            );
        });
    return result;
}
