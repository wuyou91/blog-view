<template>
    <div class="bg" @click = "close">
        <div class="wrap">
            <img v-lazy="imgBase + phtoInfo.name" alt="">
            <div class="info">
                <p>{{phtoInfo.name.match(/_.+\./g)[0].slice(1,-1)}}</p>
                <p>分类：{{phtoInfo.classify}} 原尺寸：{{phtoInfo.width}}x{{phtoInfo.height}}</p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/config'

export default {
    props:{
        phtoInfo: Object
    },
    data() {
        return {
            imgBase: config.cdn + '/',
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.bg{
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    .wrap{
        position: absolute;
        top: 3%;
        left: 5%;
        width: 90%;
        text-align: center;
        height: 90%;
        img{
            max-height: 100%;
        }
    }
}
.info{
    color: #fff;
}
</style>

