<template>
    <div class="footer">
        <p>访客统计 {{visitorCount}}</p>
        <p>Copyright ©2019 yancx.cn 版权所有 <a href="http://www.miitbeian.gov.cn/">粤ICP备19032467号</a></p>
        <p></p>
        <p>感谢 <a href="https://www.qiniu.com/">七牛云</a> 提供CDN服务</p>
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
        })
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        padding: 40px 0 20px 0;
        background: #2d3237;
        color: #6b6e81;
        p{
            text-align: center;
            font-size: 12px;
            a{
                color: #6b6e81;
                transition: all .2s linear;
                &:hover{
                    color: #999;
                }
            }
        }
    }
    
</style>
