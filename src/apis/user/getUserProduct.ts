import axios from "axios";
import Product from "../../entity/product";

export async function getUserProduct(userid: number, jwt: string): Promise<Product[]> {
    let res: Product[];
    res = [] as Product[];
    if (jwt == ``) {
        return []
    }
    await axios({
        url: `https://api.maiquer.tech/api/user/queryById/${userid}`,
        method: "GET",
        headers: {
            Authorization: jwt
        }
    })
        .then((response) => {
            if (response.data.code != 0) {
                return []
            }
            const all = response.data.data.myEvaluations;
            if (all.length != 0) {
                for (const i of all) {
                    const a = new Product(i.name, i.id, i.coverPic, i.realUrl, i.price * 100, i.type,i.bgPic);
                    res.push(a);
                }
            }
        });
    return res;
}

export async function getFavProduct(userid: number, jwt: string): Promise<Product[]> {
    let res = [] as Product[];
    if (jwt == "") {
        return []
    }
    await axios({
        url: `https://api.maiquer.tech/api/user/queryById/${userid}`,
        method: "GET",
        headers: {
            Authorization: jwt
        }
    })
        .then((response) => {
            if (response.data.code != 0) {
                return []
            }
            const all = response.data.data.likeEvaluations;
            if (all.length != 0) {
                for (const i of all) {
                    const a = new Product(i.name, i.id, i.coverPic, i.realUrl, i.price * 100, i.type,i.bgPic);
                    res.push(a);
                }
            }
        });
    return res;
}

