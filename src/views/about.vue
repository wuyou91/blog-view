<template>
  <div class="about">
    <div @click="print">打印</div>
    <!--startprint-->
    <section>
      <h2>基础信息</h2>
      <ul>
        <li>邮箱: ycx1991@live.com</li>
        <li>手机: Base64(MTczMDg0NzIwNjk=)</li>
        <li><a href="https://github.com/wuyou91" target="_blank">GitHub</a></li>
        <li><a href="https://weibo.com/ycx1991">微博</a></li>
        <li><a href="https://www.zhihu.com/people/wu-you-76-28/activities">知乎</a></li>
      </ul>
    </section>
    <section>
      <h2>教育背景</h2>
      <p>2010.09 ~ 2014.06 本科就读于<strong>吉林农业大学</strong></p>
    </section>
    <section>
      <h2 >技能&amp;能力</h2>
      <h4>基础能力</h4>
      <ul>
          <li>熟练掌握HTML5、CSS3和ECMAScript6。</li>
          <li>熟悉移动端布局特点。</li>
          <li>对TCP/IP协议簇有一定了解，熟悉HTTP协议。</li>
      </ul>
      <h4>前端工程化</h4>
      <ul>
        <li>会用webpack、gulp实现前端工程化；</li>
        <li>能用git实现版本管理。</li>
      </ul>
      <h4>框架与库等的使用情况</h4>
      <ul>
          <li>熟练使用Vue技术栈，对React有一定了解。</li>
          <li>熟练使用Sass/Less等CSS预处理语言。</li>
      </ul>
      <h4>后端能力</h4>
      <ul>
          <li>熟悉Node.js及MongoDB数据库，对SQL数据库亦有一定了解；</li>
          <li>能用Expres框架开发web服务，实现http请求、路由、数据库查询、数据读写等功能。</li>
          <li>熟悉linux命令行模式，能独立完成网站的服务器部署。</li>
      </ul>
      <h4>其他</h4>
      <ul>
        <li>三年设计工作经验，熟练使用各种设计软件。</li>
        <li>爱好摄影，有过拍摄工作经验，能拍摄照片和视频并完成后期。</li>
      </ul>
    </section>
    <section>
      <h2 >工作经历</h2>
      <h4>2018.07 ~ 2019.04</h4>
      <p>在<strong>深圳法本信息技术有限公司</strong>担任<strong>前端开发</strong>，主要负责<strong>优必选企业官网和官方商城的开发和维护、以及活动营销H5页面和微信小程序开发。</strong></p>
      <h4>2017.04 ~ 2018.06</h4>
      <p>在<strong>深圳卓尔摄影器材有限公司</strong>担任<strong>前端开发</strong>，主要负责<strong>官方商城的开发和维护，以及日常专题活动页面的开发。</strong></p>
      <h4>2014.07 ~ 2017.02</h4>
      <p>分别在<strong>长沙千吉软装设计公司</strong>和<strong>长沙万物食品有限公司</strong>从事<strong>网页设计。</strong></p> 
    </section>
    <section>
      <h2>练习DEMO</h2>
      <p>详情访问：<a href="http://www.yancx.cn/DEMO/">yancx.cn/DEMO</a></p>
    </section>
    <section>
      <h2>看过的专业书籍</h2>
      <ul>
        <li><a href="https://book.douban.com/subject/11874748/">《JavaScript语言精粹》</a>，道格拉斯•克罗克福德 (Douglas Crockford) 著。</li>
        <li><a href="https://book.douban.com/subject/30288107/">《Node.js实战（第2版）》</a>， [英]Alex Young / [美] Bradley Meck / [美]Mike Cantelon / [美]Tim Oxley / [美]Marc Harter 著。</li>
        <li><a href="https://book.douban.com/subject/25863515/">《图解HTTP》</a>， [日] 上野宣 著。</li>
        <li><a href="https://book.douban.com/subject/27127030/">《ES6标准入门（第3版）》</a>，阮一峰 著。</li>
        <li><a href="https://book.douban.com/subject/10546125/">《javascript高级程序设计（第3版）》</a>，[美] 尼古拉斯·泽卡斯 著。</li>
        <li><a href="https://book.douban.com/subject/10792216/">《锋利的jQuery（第2版）》</a>，单东林 / 张晓菲 / 魏然 著。</li>
        <li><a href="https://book.douban.com/subject/4736167/">《精通CSS 高级Web标准解决方案（第2版）》</a>， [英] Andy Budd / [英] Simon Collison / [英] Cameron Moll 著。</li>
        <li><a href="https://book.douban.com/subject/6038371/">《JavaScript DOM编程艺术（第2版）》</a>，[英] Jeremy Keith / [加] Jeffrey Sambells 著。</li>
        <li><a href="https://book.douban.com/subject/3323633/">《写给大家看的设计书（第3版）》</a>，[美] Robin Williams 著。</li>
        <li><a href="https://book.douban.com/subject/2238320/">《版式设计原理》</a>，[日] 佐佐木刚士 著。</li>
      </ul>
    </section>
    <!--endprint-->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('changePage', this.$route.path)  
  },
  methods: {
    print(){
      window.print();   
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 1200px;
  margin: 30px auto;
  background: #fff;
  padding: 50px 80px;
}
h2{
  font-size: 24px;
  display: block;
  margin: 30px 0 10px 0;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
h4{
  font-size: 18px;
  display: block;
  margin: 20px 0 5px 0;
}
</style>


