import {defineStore} from "pinia";
import login from "../apis/security/login";
import wxauth from "../apis/security/wxauth";
import {smsSend, smsAuth} from "../apis/security/smsAuth";


export const loginState = defineStore("login", {
    state: () => {
        return {
            isLoggedIn: false,
            hasJWTs: false,
            jwtToken: "",
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
            await wxauth(code, "maiqu").then((jwt) => {
                this.jwtToken = jwt;
                this.extractUserId();
                this.isLoggedIn = true;
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
                this.extractUserId();
                if (this.extractExpireTime() - this.getTimeStamp() < 6000) {
                    this.logout()
                    return
                } else {
                    this.isLoggedIn = true;
                    console.log(`Loaded from local, userID is ${this.userid}`)
                }
            }
        },
        logout() {
            localStorage.clear();
        },
        extractUserId() {
            const data = this.jwtToken.slice(this.jwtToken.indexOf(".") + 1, this.jwtToken.lastIndexOf("."));
            const id = eval(`(${window.atob(data)})`);
            this.userid = id.jti;
        },
        extractExpireTime(): number {
            const data = this.jwtToken.slice(this.jwtToken.indexOf(".") + 1, this.jwtToken.lastIndexOf("."));
            const id = eval(`(${window.atob(data)})`);
            return id.exp
        },
        getTimeStamp(): number {
            return Math.round(new Date().getTime() / 1000)
        }
    },
});
