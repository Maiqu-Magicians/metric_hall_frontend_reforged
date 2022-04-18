import axios from "axios";
import qs from "qs";
import { loginState } from "../../store/loginStatus";

const login = loginState();
/**
 * @description 在购买商品之前的预处理，为了拿到支付的各种凭证
 * @param id 商品的ID
 * @param user_id 用户ID
 */
export default async function buyProduct(id: string, user_id: number) {
  let res: payd = {
    timeStamp: "",
    orderNo: "",
    paySign:
      "=",
    appId: "",
    package: "",
    nonceStr: "",
  };
  await axios({
    url: `https://api.maiquer.tech/api/wx-pay/jsapi/${id}`,
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: login.jwtToken,
    },

    data: qs.stringify({ userId: user_id }),
  }).then((response) => {
    res = response.data.data;
  });
  return res;
}
