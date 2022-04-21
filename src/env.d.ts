/// <reference types="vite/client" />

type Product = {
    name: string;
    index: number;
    price: number;
    backgd_url: string;
    target_url: string;
    bigPic:string;
    alreadyHave?: boolean;
    isLiked?:boolean;
    type: number;
};

declare module "*.vue" {
    import type {DefineComponent} from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare type payd = {
    timeStamp: string;
    orderNo: string;
    package: string;
    appId: string;
    paySign: string;
    nonceStr: string;
};

declare module "weixin-js-sdk";
declare module "qs";

declare class WeixinJSBridge {
    static invoke: (arg0: string, arg1: any, arg3: (res: any) => void) => {};
}
