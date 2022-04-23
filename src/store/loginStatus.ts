import {defineStore} from "pinia";
import login from "../apis/security/login";
import wxauth from "../apis/security/wxauth";
import {smsSend, smsAuth} from "../apis/security/smsAuth";



export const loginState = defineStore("login", {
    state: () => {
        return {
            isLoggedIn: false,
            hasJWTs: false,
            jwtToken: "" as string,
            userid: 0,
        };
    },
    actions: {
        async doLogin(username: string, password: string): Promise<boolean> {
            let success = false;
            await login(username, password).then((session) => {
                if (session.jwt != "") {
                    this.isLoggedIn = true;
                    success = true;
                    this.jwtToken = session.jwt;
                    this.userid = session.userid;
                    this.save2Local();
                }
            });
            return success;
        },
        async wxLogin(code: string): Promise<boolean> {
            let success = false;
            const state = "maiqu";
            await wxauth(code, state).then((jwt) => {
                this.isLoggedIn = true;
                this.jwtToken = jwt;
                const data = jwt.slice(jwt.indexOf(".") + 1, jwt.lastIndexOf("."));
                const id = eval(`(${atob(data)})`);
                this.userid = id.jti;
                this.save2Local();
                success = true;
            });
            return success;
        },
        async doSendSms(phone: string): Promise<boolean> {
            let res = false;
            await smsSend(phone).then(() => {
                res = true;
            });
            return res;
        },
        async doSmsBind(phone: string, code: string): Promise<{ success: boolean, message: string }> {
            let success = false;
            let message = ""
            await smsAuth(this.userid, phone, code).then((flag) => {
                success = flag.success
                message = flag.message
            });
            return {success, message};
        },
        save2Local() {
            localStorage.clear();
            localStorage.setItem("jwt", this.jwtToken.toString());
        },
        loadfromLocal() {
            if (localStorage.getItem("jwt")) {
                this.jwtToken = String(localStorage.getItem("jwt"));
                const data = this.jwtToken.slice(this.jwtToken.indexOf(".") + 1, this.jwtToken.lastIndexOf("."));
                const id = eval(`(${atob(data)})`);
                this.userid = id.jti
                this.isLoggedIn = true;
                console.log(`Loaded from local, userID is ${this.userid},jwt is ${this.jwtToken}`)
            }
        },
        logout() {
            localStorage.clear();

        }
    },
});
