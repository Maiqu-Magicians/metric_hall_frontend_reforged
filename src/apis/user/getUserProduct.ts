import axios from "axios";
import Product from "../../entity/product";

export async function getUserProduct(userid: number): Promise<Product[]> {
    let res: Product[];
    res = [] as Product[];
    if (userid == 0) {
        return []
    }
    await axios({
        url: `/api/user/queryById/${userid}`,
        method: "GET",
    })
        .then((response) => {
            if (response.data.code != 0) {
                return []
            }
            const all = response.data.data.myEvaluations;
            if (all.length != 0) {
                for (const i of all) {
                    res.push(i as Product)
                }
            }
        });
    return res;
}

export async function getFavProduct(userid: number): Promise<Product[]> {
    let res = [] as Product[];
    if (userid == 0) {
        return []
    }
    await axios({
        url: `/api/user/queryById/${userid}`,
        method: "GET"
    })
        .then((response) => {
            if (response.data.code != 0) {
                return []
            }
            const all = response.data.data.likeEvaluations;
            if (all.length != 0) {
                for (const i of all) {
                    res.push(i as Product);
                }
            }
        });
    return res;
}

