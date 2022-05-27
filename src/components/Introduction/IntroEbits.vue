<template>
    <div class="maintitle">
        <div class="icon"><img src="../../assests/introduction_pics/8-bits/deco_21.svg"></div>
        <div class="text">{{ mainTitle }}</div>
        <div class="icon"><img src="../../assests/introduction_pics/8-bits/deco_22.svg"></div>
    </div>
    <div class="main" v-for="(title, index) in info">
        <div v-if="index == 1">
            <div class="title_container">
                <img class="icon" src="../../assests/introduction_pics/8-bits/title_1.svg" alt="">
                <div class="title_2">为什么选择麦趣</div>
            </div>
            <div class="info_area_2">
                <div class="subtitle">
                    <div><img class="icon" style="transform: translateY(-3vh);" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;</div>
                    <div style="margin-left: 1vh;transform: translateY(-3vh);">来源于年轻人，服务于年轻人。</div>
                </div>
                <div class="subtitle">
                    <div><img class="icon" style="transform: translateY(-3vh);" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;</div>
                    <div style="margin-left: 1vh;transform: translateY(-3vh);">专业知识，优秀团队，客观评价，中肯建议。</div>
                </div>
                <div class="decoration">
                    <img src="../../assests/introduction_pics/8-bits/deco_21.svg" alt="">
                    <img src="../../assests/introduction_pics/8-bits/deco_22.svg" alt="">
                </div>
            </div>
        </div>
        <div v-if="(info!)[index].subtitle.length == 0">
            <div class="title_1">{{ info![index].title }}</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/8-bits/title_2.svg" alt=""></div>
            <div class="info_area_1">
                <div v-for="(item, sub_index) in (info!)[index].content" :key="sub_index">
                    <div><img class="icon" src="../../assests/introduction_pics/8-bits/icon_2.svg" alt="">&nbsp;</div>
                    <div class="content_1" style="transform: translateY(-3vh);">{{ (info!)[index].content[sub_index] }}
                    </div>
                </div>
            </div>

        </div>
        <div v-else>
            <div class="title_container">
                <img src="../../assests/introduction_pics/8-bits/title_1.svg" alt="">
                <div class="title_2">{{ (info!)[index].title }}</div>
            </div>
            <div class="info_area_2">
                <div style="transform: translateY(-3vh);" v-for="(item, sub_index) in (info!)[index].subtitle"
                    :key="sub_index">
                    <div class="subtitle">
                        <div><img class="icon" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;
                        </div>
                        <div style="margin-left: 1vh;">{{ (info!)[index].subtitle[sub_index] }}</div>
                    </div>
                    <div class="content_2">{{ info![index].content[sub_index] }}</div>
                </div>
                <div class="decoration">
                    <img src="../../assests/introduction_pics/8-bits/deco_21.svg" alt="">
                    <img src="../../assests/introduction_pics/8-bits/deco_22.svg" alt="">
                </div>
            </div>


        </div>

    </div>
    <div class="extra_info">
        <div class="title_container">
            <img src="../../assests/introduction_pics/8-bits/title_1.svg" alt="">
            <div class="title_1">测评报告案例</div>
        </div>
        <img :src="exampleUrl" class="example" alt="">
        <div class="title_2">测试说明</div>
        <div><img style="width: 60vw;
        transform: translateX(-2vw) translateY(-0.8vh);" class="icon"
                src="../../assests/introduction_pics/8-bits/title_2.svg" alt=""></div>

        <div class="subtitle" style="margin-top: 3vh">
            <div><img class="icon" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;</div>
            <div class="notice">付费成功后将自动跳转到答题页面，本测评共有{{ qNum
            }}道题，答题时长为{{ leastTime }}～{{ longestTime }}分钟，若中途退出会自动保存已答题目，测试者再次进入即可。</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;</div>
            <div class="notice">为保证测评准确性，测评不能重复进行，请答题者根据实际情况作答，答题结束后会生成一份专业的测评报告。</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;</div>
            <div class="notice">购买的测评均永久保存在网站底部菜单“我的测评”中，用户点击进入即可继续答题或查看报告。</div>
        </div>
        <div class="title_container">
            <img src="../../assests/introduction_pics/8-bits/title_1.svg" alt="">
            <div class="title_1">你可能还想知道这些</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/8-bits/icon_1.svg" alt="">&nbsp;</div>
            <div class="notice"><a :href="recommendUrl">{{ recommendInfo }}</a></div>
        </div>
    </div>

    <div style="height:10vh"></div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';

class intro_unit {
    title: String;
    subtitle: String[];
    content: String[];
    constructor(title: String, subtitle: String[], content: String[]) {
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
    }
}

const props = defineProps({
    mainTitle: String,
    info: Array as PropType<intro_unit[]>,
    qNum: Number,
    leastTime: Number,
    longestTime: Number,
    exampleUrl: String,
    recommendInfo: String,
    recommendUrl: String
})
</script>

<style lang="scss" scoped>
.maintitle {
    margin-top: 3vh;
    margin-left: 3vh;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .text {
        margin-top: 2vh;
        font-size: 2.4vh;
        font-family: "华光文韵宋_CNKI";
        color: #5C80FD;
        font-weight: bold;
    }

    .icon {
        img {
            width: 5vh;
        }
    }

    margin-right: 3vh;
}

.main {
    margin-left: 3vh;
    margin-right: 3vh;
}

.title_1 {
    margin-top: 5vh;
    font-family: "微软雅黑";
    font-weight: bold;
    font-size: 2.5vh;
    text-indent: 1vh;
    color: #000518;
}

.title_2 {
    margin-top: 5vh;
    font-family: "黑体";
    font-weight: bold;
    font-size: 2.5vh;
    text-indent: 1vh;
    color: #000518;
}


.info_area_1 {
    margin-top: 2vh;
    background-color: #BECDEA;
    padding: 0.1vh 1.2vh 0 1.2vh;
    border-radius: 3vh;

    .icon {
        width: 23vh;
        mix-blend-mode: color-burn;
        transform: translateY(-1.8vh);
    }
}

.info_area_2 {
    margin-top: 2vh;
    background-color: #e0e7f7;
    padding: 0.1vh 1.2vh 0 1.2vh;
    border-radius: 3vh;

    .icon {
        width: 23vh;
    }
}


.subtitle {
    margin-top: 4vh;
    display: flex;
    font-family: "黑体";
    flex-direction: row;
    font-size: 2vh;

    .icon {
        width: 2vh;
    }
}

.content_1 {
    font-family: "微软雅黑";
    text-indent: 4.2vh;
    line-height: 3.8vh;
    width: 100%;
    font-size: 1.8vh;
    white-space: pre-wrap;
}

.content_2 {
    font-family: "微软雅黑 Light";
    text-indent: 4vh;
    line-height: 3.8vh;
    width: 100%;
    font-size: 1.8vh;
    white-space: pre-wrap;
}

.titleImg {
    width: 60vw;
    transform: translateX(-2vw) translateY(-1.0vh);
}

.decoration {
    display: flex;
    justify-content: space-between;

    img {
        width: 5vh;
    }
}

.extra_info {
    margin-left: 3vh;
}

.example {
    width: 95%;
    margin-top: 2vh;
}

.notice {
    margin-left: 2vh;
    line-height: 3.8vh;
    transform: translateY(-1vh);
}

.title_container {
    display: flex;

    img {
        margin-top: 4vh;
        width: 3vh;
    }
}
</style>