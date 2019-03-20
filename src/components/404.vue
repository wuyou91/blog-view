<template>
  <div class="not-found">
    <div class="text">哎呀~ 网页走丢了...</div>
    <router-link to="/home" class="go-home">返回首页</router-link>
    <div class="rail">
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
    </div>
    <div class="world">
      <div class="forward">
        <div class="box">
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variable.scss';
.not-found{
  width: 100%;
  height: 800px;
  background: $background;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}
div {
  transform-style: preserve-3d;
}
.rail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotateX(-30deg) rotateY(-30deg);
          transform: rotateX(-30deg) rotateY(-30deg);
}
.rail .stamp {
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4fa2ff;
  color: #fff;
  font-size: 7rem;
}
.rail .stamp:nth-child(1) {
          animation: stampSlide 40000ms -2300ms linear infinite;
}
.rail .stamp:nth-child(2) {
          animation: stampSlide 40000ms -4300ms linear infinite;
}
.rail .stamp:nth-child(3) {
          animation: stampSlide 40000ms -6300ms linear infinite;
}
.rail .stamp:nth-child(4) {
          animation: stampSlide 40000ms -8300ms linear infinite;
}
.rail .stamp:nth-child(5) {
          animation: stampSlide 40000ms -10300ms linear infinite;
}
.rail .stamp:nth-child(6) {
          animation: stampSlide 40000ms -12300ms linear infinite;
}
.rail .stamp:nth-child(7) {
          animation: stampSlide 40000ms -14300ms linear infinite;
}
.rail .stamp:nth-child(8) {
          animation: stampSlide 40000ms -16300ms linear infinite;
}
.rail .stamp:nth-child(9) {
          animation: stampSlide 40000ms -18300ms linear infinite;
}
.rail .stamp:nth-child(10) {
          animation: stampSlide 40000ms -20300ms linear infinite;
}
.rail .stamp:nth-child(11) {
          animation: stampSlide 40000ms -22300ms linear infinite;
}
.rail .stamp:nth-child(12) {
          animation: stampSlide 40000ms -24300ms linear infinite;
}
.rail .stamp:nth-child(13) {
          animation: stampSlide 40000ms -26300ms linear infinite;
}
.rail .stamp:nth-child(14) {
          animation: stampSlide 40000ms -28300ms linear infinite;
}
.rail .stamp:nth-child(15) {
          animation: stampSlide 40000ms -30300ms linear infinite;
}
.rail .stamp:nth-child(16) {
          animation: stampSlide 40000ms -32300ms linear infinite;
}
.rail .stamp:nth-child(17) {
          animation: stampSlide 40000ms -34300ms linear infinite;
}
.rail .stamp:nth-child(18) {
          animation: stampSlide 40000ms -36300ms linear infinite;
}
.rail .stamp:nth-child(19) {
          animation: stampSlide 40000ms -38300ms linear infinite;
}
.rail .stamp:nth-child(20) {
          animation: stampSlide 40000ms -40300ms linear infinite;
}

@-webkit-keyframes stampSlide {
  0% {
            transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(130px);
  }
  100% {
            transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(-3870px);
  }
}

@keyframes stampSlide {
  0% {
            transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(130px);
  }
  100% {
            transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(-3870px);
  }
}
.world {
          transform: rotateX(-30deg) rotateY(-30deg);
}
.world .forward {
  position: absolute;
          animation: slide 2000ms linear infinite;
}
.world .box {
  width: 200px;
  height: 200px;
          transform-origin: 100% 100%;
          animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
}
.world .box .wall {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(79, 162, 255, 0.8);
  border: 1px solid #fafafa;
  box-sizing: border-box;
}
.world .box .wall::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 7rem;
}
.world .box .wall:nth-child(1) {
          transform: translateZ(100px);
}
.world .box .wall:nth-child(2) {
          transform: rotateX(180deg) translateZ(100px);
}
.world .box .wall:nth-child(3) {
          transform: rotateX(90deg) translateZ(100px);
}
.world .box .wall:nth-child(3)::before {
          transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
}
.world .box .wall:nth-child(4) {
          transform: rotateX(-90deg) translateZ(100px);
}
.world .box .wall:nth-child(4)::before {
          transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
}
.world .box .wall:nth-child(5) {
          transform: rotateY(90deg) translateZ(100px);
}
.world .box .wall:nth-child(5)::before {
          transform: rotateX(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
}
.world .box .wall:nth-child(6) {
          transform: rotateY(-90deg) translateZ(100px);
}
.world .box .wall:nth-child(6)::before {
          transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
}

@keyframes zeroFour {
  0% {
    content: '4';
  }
  100% {
    content: '0';
  }
}
@keyframes roll {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  85% {
    -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
  }
  87% {
    -webkit-transform: rotateZ(88deg);
            transform: rotateZ(88deg);
  }
  90% {
    -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
  }
  100% {
    -webkit-transform: rotateZ(90deg);
            transform: rotateZ(90deg);
  }
}
@keyframes slide {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
  }
}
.text{
  position: absolute;
  top: 9%;
  left: 50%;
  width: 600px;
  margin-left: -300px;
  text-align: center;;
  font-size: 38px;
  font-weight: 400;
  color: #666;
}
.go-home{
  position: absolute;
  box-sizing: border-box;
  top: 20%;
  left: 50%;
  display: block;
  width: 160px;
  margin-left: -80px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 21px;
  background: #4fa2ff;
  cursor: pointer;
  transition: all .2s linear;
  z-index: 999;
  &:hover{
    box-shadow: 0 3px 8px 0 rgba(14,50,90,.2);
  }
}
</style>

