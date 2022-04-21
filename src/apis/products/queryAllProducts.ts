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
        .get(
            type
                ? `https://api.maiquer.tech/api/evaluation/queryAll/${type}`
                : "https://api.maiquer.tech/api/evaluation/queryAll"
        )
        .then((response) => {
            for (const i of response.data.data) {
                const p = new Product(
                    i.name,
                    i.id,
                    i.coverPic,
                    i.realUrl,
                    i.price * 100,
                    i.type,
                    i.bgPic
                );
                res.push(p);
            }
        }) //
        .catch((err) => {
            console.log(err);
        });
    return res;
}
