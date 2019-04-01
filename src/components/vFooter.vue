<template>
    <div class="footer">
        <p>访客统计 {{visitorCount}}</p>
        <p>Copyright ©2019 乌酉 版权所有</p>
        <p>本站由 阿里云 提供计算与安全服务，感谢 七牛云 提供CDN服务</p>
    </div>
</template>

<script>
import http from '@/http'
export default {
    data() {
        return {
            visitorCount: 6781
        }
    },
    created(){
        http.getVisitorCount().then((res) => {
            this.visitorCount = res.data.data[0].count
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        padding: 30px 0 20px 0;
        background: #2d3237;
        color: #6b6e81;
        p{
            text-align: center;
            font-size: 12px;
        }
    }
    
</style>
