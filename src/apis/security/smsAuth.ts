import axios from "axios";

/**
 * @description 手机号登录
 * @param phone 手机号
 * @return success 成功
 **/
export async function smsSend(phone: string): Promise<boolean> {
    let res = false;
    await axios
        .post(`https://api.maiquer.tech/api/sms/smsCodeSend?phone=${phone}`)
        .then(() => {
            res = true;
        });
    return res;
}


/**
 * @description 绑定手机号接口
 * @param userid 用户ID
 * @param phone 手机号
 * @param code 验证码
 * @return success,message 成功与否和消息
 */
export async function smsAuth(userid: number, phone: string, code: string): Promise<{ success: boolean, message: string }> {
    let success = false;
    let message = ""
    await axios
        .post(`https://api.maiquer.tech/api/sms/login/${userid}?phone=${phone}&code=${code}`)
        .then((response) => {
            if (response.data.code == 0) {
                success = true;
            }
            message = response.data.message
        });
    return {success, message};
}
