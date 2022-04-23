import {defineStore} from "pinia";
import getAllProducts from "../apis/products/queryAllProducts";
import {getFavProduct, getUserProduct} from "../apis/user/getUserProduct";
import Product from "../entity/product";
import {loginState} from "./loginStatus";
import {addFavourite, delFavourite} from "../apis/user/editFav";


export const ProductStore = defineStore("pd", {
    state: () => {
        return {
            productLs: [] as Product[],
            myFav: [] as Product[]
        };
    },
    getters: {
        getById: (store) => {
            return (id: number) => {
                return store.productLs.find(r => r.id === id)!
            }
        }
    },
    actions: {
        async getAll() {
            const login = loginState();
            const Fall = getAllProducts();
            const Fusr = getUserProduct(login.userid);
            const Ffav = getFavProduct(login.userid)
            // next we will mark those
            await Promise.all([Fall, Fusr, Ffav]).then((result) => {
                let all = result[0];
                const usr = result[1];
                const fav = result[2];
                for (const i of usr) {
                    const index = all.findIndex((a) => a.id == i.id);
                    all[index].alreadyHave = true;
                }
                for (const i of fav) {
                    const index = all.findIndex(a => a.id == i.id)
                    all[index].isLiked = true;
                }
                // store products
                this.productLs = all;
            });
        },
        async getFav() {
            const login = loginState()
            await getFavProduct(login.userid).then(
                res => {
                    this.myFav = res
                }
            )
        },
        async addFav(evaId: number) {
            const login = loginState()
            await addFavourite(evaId, login.userid)
            await this.getAll()
        },
        async delFav(evaId: number) {
            const login = loginState()
            await delFavourite(evaId, login.userid)
            await this.getAll()
        }
    },
});
