import {loginState} from "../../store/loginStatus";
import qs from "qs";
import axios from "axios";

const login = loginState()
/**
@param id 产品ID
@return 什么都不返回
*/
const addProduct = async (id: number) => {
    let success = false;
    await axios({
        method: "POST",
        url: `/api/user/addMyEva`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        }, data: qs.stringify({userId: login.userid, evaId: id}),
    }).then(
        res => {
            if (res.data.code == 0) {
                success = true
            }
        }
    )
    return success
}

export default addProduct