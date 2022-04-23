import axios from "axios";
import Order from "../../entity/order";


export default async function getOrders(userid: number, jwt: string): Promise<Order[]> {
    let res = [] as Order[]
    await axios({
        url: `/api/order/queryPersonal/${userid}`,
        headers: {
            Authorization: jwt
        },
        method: "POST"
    }).then(r => {
        if (r.data.code == 0) {
            for (const i of r.data.data) {
                const a = new Order(i.title, i.createTime, i.totalFee / 100, i.orderStatus)
                res.push(a)
            }
        }
    })
    return res
}