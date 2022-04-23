<template>
  <el-card shadow="always" class="product" @click="ClickCard()">
    <div>
      <img :src="props.product.coverPic" alt=""/>
    </div>
    <div class="description">
      <p class="title">{{ props.product.name }}</p>
      <p class="more-info">{{ props.product.name }}</p>
      <span class="price" v-if="!props.product.alreadyHave">价格：¥ {{ props.product.price  }}</span>
      <span class="have" v-else>已经购买</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import buyProduct from "../../apis/products/buyProduct";
import {loginState} from "../../store/loginStatus";
import addProduct from "../../apis/products/addProduct";
import Product from "../../entity/product";

const login = loginState()

const props = defineProps<{ product: Product }>();
const ClickCard = async () => {
  if (!login.isLoggedIn) {
    window.open("https://api.maiquer.tech/api/wechat/login")
    return
  }
  if (props.product.alreadyHave) {
    window.open(props.product.realUrl)
  } else {
    await buyProduct(String(props.product.id), login.userid).then((res) => {
      WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: res.appId, //公众号ID，由商户传入
            timeStamp: res.timeStamp, //时间戳，自1970年以来的秒数
            nonceStr: res.nonceStr, //随机串
            package: res.package, //
            signType: "RSA", //微信签名方式：
            paySign: res.paySign, //微信签名
          },
          async (res: any) => {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              await addProduct(props.product.id).then(
                  res => {
                    if (res) {
                      location.reload()
                    }
                  }
              )
            }
          }
      );
    });
  }
};
</script>

<style lang="scss" scoped>

.tags {
  & > span {
    font-size: 13px;
    color: grey;
    padding: 5px;
    background-color: #eceeee;
    border-radius: 9px;
    margin-right: 10px;
  }
}

.el-card {
  border-radius: 15px;
  margin: 20px 10px 10px;
}

:deep(.el-card__body) {
  padding: 0 !important;
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: #eceeee;

  & img {
    width: 100px !important;
    height: 100px;
    position: relative;
  }
}

.description {
  //margin-left: 20px;
  //display: block;
  top: 100px;

  & > .title {
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: 12px;
  }

  & > .more-info {
    font-size: 13px;
    text-align: center;
    color: grey;
    line-height: 6px;
  }

  & > .price {
    color: red;
    font-size: 12px;
    line-height: 8px;
    background-color: #f6d2d2;
    padding: 6px;
    border-radius: 9px;
  }

  & > .have {
    color: white;
    font-size: 12px;
    line-height: 8px;
    background-color: #7cad44;
    padding: 6px;
    border-radius: 9px;
    text-align: center;
  }
}
</style>
