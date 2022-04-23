import axios from "axios";
import Product from "../../entity/product";

/**
 * @description 得到所有的产品。
 * @param type 产品种类，可以为空
 */
export default async function getAllProducts(
    type?: number
): Promise<Product[]> {
    const res = [] as Product[];
    await axios
        .get(`/api/evaluation/queryAll${type ? `/type` : ''}`
        )
        .then((response) => {
            for (const i of response.data.data) {
                res.push(i as Product);
            }
        }) //
        .catch((err) => {
            console.log(err);
        });
    return res;
}
