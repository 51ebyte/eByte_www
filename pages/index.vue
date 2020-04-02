<template>
  <div class="index_page">
    <div class="header">
      <ul class="nav">
        <template v-for="(item, index) in navBar">
          <li class="item" :key="index">
            <a :href="item.children ? 'javascript:;' : item.href">{{ item.text }}</a>
            <template v-if="item.children">
              <span class="arrow"></span>
              <ul class="child">
                <template v-for="(child, j) in item.children">
                  <li class="items" :key="j">
                    <a :href="'/sdk' + child.path">{{ child.text }}</a>
                  </li>
                </template>
              </ul>
            </template>
          </li>
        </template>
      </ul>
      <div class="actions">
        <template v-if="isLogin">
          <a href="javascript:;" class="avatar item">
            <i class="icon"></i>
            <span>系统管理员</span>
          </a>
        </template>
        <template v-else>
          <router-link :to="{ name: 'user-signin' }" class="login item">登录</router-link>
          <router-link :to="{ name: 'sdk-doc' }" class="trial item" target="_blank">免费试用</router-link>
        </template>
      </div>
    </div>
    <div class="main">
     <div v-swiper:mySwiper="swiper.option" class="swiper" @mouseenter="swiperAction('stop')" @mouseleave="swiperAction('start')">
        <div class="swiper-wrapper">
          <template v-for="(item, index) in swiper.slide">
            <div class="swiper-slide" :key="index">
              <img :src="item.src" />
              <div class="extend">
                <h2 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration='0.5s' swiper-animate-delay='0s'>{{item.title}}</h2>
                <p  class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration='0.5s' swiper-animate-delay='0.5s' v-html="item.desc"></p>
              </div>
            </div>
          </template>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <Row>
          <Col span="6">
            <h4>网络品牌形象创意</h4>
            <p>互动网站、电子商务开发与运营</p>
          </Col>
          <Col span="6">
            <h4>形象识别系统</h4>
            <p>VIS、标示标牌、动漫形象运用720全景体验、线路导游</p>
          </Col>
          <Col span="6">
            <h4>移动终端应用</h4>
            <p>微信、微网站、移动电子商务APP应用程序开发</p>
          </Col>
          <Col span="6">
            <h4>系统集成</h4>
            <p>智能监控、电子票箱、无线覆盖多媒体展陈</p>
          </Col>
        </Row>
        <div class="link">
          <a class="item" href="http://www.51ebyte.com/">关于51ebyte</a>
          <a class="item" href="http://wpa.qq.com/msgrd?v=3&amp;uin=291362069&amp;site=qq&amp;menu=yes">联系客服</a>
          <a class="item" href="javascript:;" target="_blank">法律声明及隐私权政策</a>
        </div>
        <p class="copyright"><em>Copyright &copy; 2020 字节极客/51eByte.com 版权所有</em></p>
      </div>
    </div>
    <div class="splash"><img class="imgs" src="../assets/logo/logo.png" /></div>
  </div>
</template>

<script>
import "swiper-animate-cn/animate.min.css"
import {swiperAnimateCache, swiperAnimate, clearSwiperAnimate} from "swiper-animate-cn"
export default {
  layout: 'index',
  data() {
    return {
      isLogin: false,
      navBar: [
        {
          text: '微信开发',
          children: [
            // { text: '小程序', path: '/doc/weixin/offiaccount/started/overview' },
            // { text: '小游戏', path: '/doc/weixin/offiaccount/started/overview' },
            { text: '公众号', path: '/doc/weixin/offiaccount/started/overview' },
            // { text: '智能对话', path: '/doc/weixin/offiaccount/started/overview' },
            // { text: '开放平台', path: '/doc/weixin/offiaccount/started/overview' },
            // { text: '企业微信', path: '/doc/weixin/offiaccount/started/overview' },
            // { text: '微信支付', path: '/doc/weixin/offiaccount/started/overview' },
            // { text: '腾讯小微', path: '/doc/weixin/offiaccount/started/overview' }
          ]
        }
      ],
      swiper: {
        slide: [
          {
            src: 'http://www.sunlue.com/templates/main/images/banner1.jpg',
            title:'专注旅游行业10年',
            desc:'服务超过<span class="number">300</span>家知名景区'
          },{
            src: 'http://www.sunlue.com/templates/main/images/banner2.jpg',
            title:'先有体验·后有决策',
            desc:'让您拥有最完美的旅行体验'
          }
        ],
        option: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            init: function () {
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
              swiperAnimate(this)
            },
          }
        }
      }
    };
  },
  methods: {
    swiperAction: function(act) {
      let that = this;
      switch (act) {
        case 'start':
          that.mySwiper.autoplay.start();
          break;
        case 'stop':
          that.mySwiper.autoplay.stop();
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
