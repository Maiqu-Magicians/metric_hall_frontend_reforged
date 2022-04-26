import axios from "axios";
import qs from "qs";
import addProduct from "./addProduct";

/**
 * @description 在购买商品之前的预处理，为了拿到支付的各种凭证
 * @param evaId 商品的ID
 * @param userId 用户ID
 */
export async function BuyProduct(evaId: number, userId: number): Promise<{ success: boolean, orderNo: string }> {
    const res = (await axios({
        url: `/api/wx-pay/jsapi/${evaId}`,
        method: "POST",
        data: qs.stringify({userId: userId}),
    })).data.data as payd
    console.log(res)
    let ret = {success: false, orderNo: res.orderNo}
    await WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
            appId: res.appId, //公众号ID，由商户传入
            timeStamp: res.timeStamp, //时间戳，自1970年以来的秒数
            nonceStr: res.nonceStr, //随机串
            package: res.package, //
            signType: "RSA", //微信签名方式：
            paySign: res.paySign, //微信签名
        },
        async (r: any) => {
            if (r.err_msg == "get_brand_wcpay_request:ok") {
                await axios.post(`/api/wx-pay/fontNotify?orderNo=${res.orderNo}&userId=${userId}&evaId=${evaId}`)
                ret.success = true
                location.reload()
            }

        })
    return ret
}

export async function notifyBackend(evaId: number, userId: number, orderNO: string) {
    const r = await axios.post(`/api/wx-pay/fontNotify?orderNo=${orderNO}&userId=${userId}&evaId=${evaId}`)
    console.log(r)
}



