import axios from "axios";
import qs from "qs";
/**
 * @description 在购买商品之前的预处理，为了拿到支付的各种凭证
 * @param evaId 商品的ID
 * @param userId 用户ID
 */
export default async function InitBuyProduct(evaId: string, userId: number) {
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
    url: `/api/wx-pay/jsapi/${evaId}`,
    method: "POST",
    data: qs.stringify({ userId: userId }),
  }).then((response) => {
    res = response.data.data;
  });
  return res;
}


