<template>
    <div class="maintitle">
        <div class="icon"><img src="../../assests/introduction_pics/planets/mainTitle_1.svg"></div>
        <div class="text">{{ mainTitle }}</div>
        <div class="icon"><img src="../../assests/introduction_pics/planets/mainTitle_2.svg"></div>
    </div>
    <div class="main" v-for="(title, index) in info">
        <div v-if="index == 1">
            <div class="title">为什么选择麦趣</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/planets/title_2.svg" alt=""></div>
            <div class="subtitle">
                <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
                <div style="margin-left: 1vh;">来源于年轻人，服务于年轻人。</div>
            </div>
            <div class="subtitle">
                <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
                <div style="margin-left: 1vh;">专业知识，优秀团队，客观评价，中肯建议。</div>
            </div>
        </div>
        <div
            v-if="(info!)[index].subtitle.length == 0 || (info!)[index].subtitle.length != 0 && (info!)[index].content.length != 0">
            <div class="title">{{ info![index].title }}</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/planets/title_2.svg" alt=""></div>
            <div class="info_area">
                <div v-for="(item, sub_index) in (info!)[index].content" :key="sub_index">
                    <div class="subtitle" style="transform: translateY(-3vh);">
                        <div><img class="icon" v-if="(info!)[index].subtitle.length"
                                src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
                        <div>{{ (info!)[index].subtitle[sub_index] }}</div>
                    </div>
                    <div class="content" style="transform: translateY(-3vh);">{{ (info!)[index].content[sub_index] }}
                    </div>
                </div>
                <img src="../../assests/introduction_pics/planets/mainTitle_1.svg" />
            </div>

        </div>
        <div v-else>
            <div class="title">{{ (info!)[index].title }}</div>
            <div><img class="titleImg" src="../../assests/introduction_pics/planets/title_2.svg" alt=""></div>
            <div style="transform: translateY(-3vh);" v-for="(item, sub_index) in (info!)[index].subtitle"
                :key="sub_index">
                <div class="subtitle">
                    <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
                    <div style="margin-left: 1vh;">{{ (info!)[index].subtitle[sub_index] }}</div>
                </div>
                <div class="content">{{ info![index].content[sub_index] }}</div>
            </div>
        </div>

    </div>
    <div class="extra_info">
        <div class="title">测评报告案例</div>
        <div><img class="titleImg" src="../../assests/introduction_pics/planets/title_2.svg" alt=""></div>
        <img :src="exampleUrl" class="example" alt="">
        <div class="title">测试说明</div>
        <div><img class="titleImg" src="../../assests/introduction_pics/planets/title_2.svg" alt=""></div>
        <div class="subtitle" style="margin-top: 3vh">
            <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
            <div class="notice">付费成功后将自动跳转到答题页面，本测评共有{{ qNum }}道题，答题时长为{{ leastTime }}～{{ longestTime
            }}分钟，若中途退出会自动保存已答题目，测试者再次进入即可。</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
            <div class="notice">为保证测评准确性，测评不能重复进行，请答题者根据实际情况作答，答题结束后会生成一份专业的测评报告。</div>
        </div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
            <div class="notice">购买的测评均永久保存在网站底部菜单“我的测评”中，用户点击进入即可继续答题或查看报告。</div>
        </div>
        <div class="title">你可能还想知道这些</div>
        <div><img class="titleImg" src="../../assests/introduction_pics/planets/title_2.svg" alt=""></div>
        <div class="subtitle">
            <div><img class="icon" src="../../assests/introduction_pics/planets/icon.svg" alt="">&nbsp;</div>
            <div class="notice"><a :href="recommendUrl">{{ recommendInfo }}</a></div>
        </div>
    </div>
    ``
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
        margin-top: 1vh;
        font-size: 2.4vh;
        font-family: "微软雅黑";
        color: #693D88;
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

.title {
    margin-top: 5vh;
    font-family: "华光细圆_CNKI";
    font-weight: bold;
    font-size: 2.5vh;
    text-indent: 1vh;
    color: #693D88;
}

.info_area {
    background-color: #E7DAF5;
    padding: 1vh 1vh 7vh 1vh;
    border-radius: 3vh;

    img {
        width: 7vh;
        float: right;
    }
}

.subtitle {
    margin-top: 2vh;
    display: flex;
    font-family: "华光细圆_CNKI";
    flex-direction: row;
    font-size: 2vh;
    line-height: 3vh;
    font-weight: bold;

    .icon {
        width: 2vh;
    }
}

.content {
    font-family: "华光细圆_CNKI";
    text-indent: 4vh;
    line-height: 3.8vh;
    width: 100%;
    font-size: 1.8vh;
    font-weight: bold;
    white-space: pre-wrap;
}

.titleImg {
    width: 60vw;
    transform: translateX(-2vw) translateY(-1.3vh);
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
}
</style>