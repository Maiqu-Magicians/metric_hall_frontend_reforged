<template>
    <div class="main-title">
        <div class="icon"><img src="../../assests/introduction_pics/autumn/mainTitle_1.svg"></div>
        <div class="text">{{ mainTitle }}</div>
        <div class="icon"><img src="../../assests/introduction_pics/autumn/mainTitle_2.svg"></div>
    </div>
    <div class="main" v-for="(title, index) in info">
        <div v-if="index == 1">

            <div class="title">为什么选择麦趣</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/autumn/title.svg" alt=""></div>
            <div class="subtitle">
                <div><img class="icon" src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
                <div style="margin-left: 1vh;">来源于年轻人，服务于年轻人。</div>
            </div>
            <div class="subtitle">
                <div><img class="icon" src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
                <div style="margin-left: 1vh;">专业知识，优秀团队，客观评价，中肯建议。</div>
            </div>
        </div>
        <div
            v-if="info[index].subtitle.length == 0 || (info[index].subtitle.length != 0 && info[index].content.length != 0)">
            <div class="title">{{ info[index].title }}</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/autumn/title.svg" alt=""></div>
            <div class="info_area">
                <div v-for="(item, sub_index) in info[index].content" :key="sub_index">
                    <div class="subtitle">
                        <div><img class="icon" v-if="info[index].subtitle.length"
                                src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
                        <div>{{ info[index].subtitle[sub_index] }}</div>
                    </div>
                    <div class="content">{{ info[index].content[sub_index] }}</div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="title">{{ info[index].title }}</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/autumn/title.svg" alt=""></div>
            <div v-for="(item, sub_index) in info[index].subtitle" :key="sub_index">
                <div class="subtitle" style="transform: translateY(-3vh);">
                    <div><img class="icon" src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
                    <div style="margin-left: 1vh;">{{ info[index].subtitle[sub_index] }}</div>
                </div>
                <div class="content" style="transform: translateY(-3vh);">{{ info[index].content[sub_index] }}</div>
            </div>
        </div>

    </div>
    <div class="extra_info">
        <div class="title">测评报告案例</div>
        <div><img class="titleImg" src="../../assests/introduction_pics/autumn/title.svg" alt=""></div>
        <img :src="exampleUrl" class="example" alt="">
        <div class="title">测试说明</div>
        <div><img class="titleImg" src="../../assests/introduction_pics/autumn/title.svg" alt=""></div>
        <div class="subtitle" style="margin-top: 3vh">
            <div><img class="icon" src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
            <div class="notice">付费成功后将自动跳转到答题页面，本测评共有{{ qNum
            }}道题，答题时长为{{ leastTime }}～{{ longestTime }}分钟，若中途退出会自动保存已答题目，测试者再次进入即可。</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
            <div class="notice">为保证测评准确性，测评不能重复进行，请答题者根据实际情况作答，答题结束后会生成一份专业的测评报告。</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/autumn/icon.svg" alt="">&nbsp;</div>
            <div class="notice">购买的测评均永久保存在网站底部菜单“我的测评”中，用户点击进入即可继续答题或查看报告。</div>
        </div>
        <div class="title">你可能还想知道这些</div>
        <div><img class="titleImg" src="../../assests/introduction_pics/autumn/title.svg" alt=""></div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
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
.main-title {
    margin-top: 3px;
    margin-left: 3px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .text {
        margin-top: 1vh;
        font-size: 7px;
        font-family: "华文仿宋";
        color: #C6580F;
        font-weight: bold;
    }

    .icon {
        img {
            width: 5px;
        }
    }

    margin-right: 3px;
}

.main {
    margin-left: 3px;
    margin-right: 3px;
}

.title {
    margin-top: 5px;
    font-family: "楷体";
    font-weight: bold;
    font-size: 1px;
    text-indent: 1px;
    color: #C6580F;
}

.info_area {
    background-color: #ECDFB5;
    padding: 1vh 1vh 1vh 1vh;
    border-radius: 0 3vh 0 0;
}

.subtitle {
    margin-top: 1.5px;
    display: flex;
    font-family: "楷体";
    flex-direction: row;
    font-size: 2px;
    font-weight: bold;

    .icon {
        width: 2px;
    }
}

.content {
    font-family: "华文楷体";
    text-indent: 1vh;
    line-height: 9px;
    width: 100%;
    font-size: 1px;
    font-weight: bold;
    white-space: pre-wrap;
}

.titleImg {
    width: 60px;
    transform: translateX(-2vw) translateY(-2.5vh);
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
</style>