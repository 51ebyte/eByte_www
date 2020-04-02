<template>
  <div class="doc_index">
    <div class="header">
      <router-link :to="{path:'/'}" class="logo">
        <img src="../../assets/logo/logo.png" />
      </router-link>
      <div class="apps">
        <e-drop-down></e-drop-down>
      </div>
      <div class="info">
        <div class="sign">
          <Avatar icon="ios-person" size="small"></Avatar>
          <Dropdown @on-click="dropdownInfoClick">
            <router-link class="sign-btn" :to="{name:'user-signin'}">
              <span class="sign-name">登录</span>
              <Icon type="ios-arrow-down" color="white"></Icon>
            </router-link>
            <DropdownMenu slot="list">
              <DropdownItem name="github">
                <Icon class="iconfont icon-github sign-icon" size="20" />
                <span class="sign-name">github</span>
              </DropdownItem>
              <DropdownItem name="gitee">
                <Icon class="iconfont icon-gitee sign-icon" size="18" />
                <span class="sign-name">Gitee</span>
              </DropdownItem>
              <DropdownItem name="signup" divided>
                <Icon class="iconfont icon-zhuce sign-icon" size="20" />
                <span class="sign-name">注册</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="body">
        <Badge text="1.0.1 beta">
          <img src="../../assets/logo/eByteSDK.png" />
        </Badge>
        <p class="content">开源的基于微信的</p>
        <p class="content">高质量JAVA FOR SDK</p>
        <div class="actions">
          <Button shape="circle" type="info" ghost>
            <Icon class="iconfont icon-github" size="16" />
            <span class="btn-text">Github</span>
          </Button>
          <Button shape="circle" type="info" ghost>
            <Icon class="iconfont icon-gitee" size="14" />
            <span class="btn-text">Gitee</span>
          </Button>
          <Button type="primary" shape="circle" long :to="{path:'/sdk/doc'}">
            立即开始使用
          </Button>
        </div>
      </div>
      <div class="lottie">
        <div class="effect" ref="effect"></div>
        <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="100" shapeType="circle" :particleSize="4"
          linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
          :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
      </div>
    </div>
    <div class="footer">
      <span>Copyright &copy; 2020 字节极客/51eByte.com  版权所有</span>
      <a href="http://www.beian.miit.gov.cn/">蜀ICP备19040469号</a>
    </div>
    <Modal ></Modal>
  </div>
</template>

<script>

  import eDropDown from '@/components/doc/dropdown/index.vue'
  import lottie from 'lottie-web'
  export default {
    components:{
      eDropDown
    },
    data() {
      return {
      }
    },
    mounted() {
      let that=this;
      var num=Math.floor(Math.random() * (4 - 1)) + 1;
      lottie.loadAnimation({
        container: that.$refs['effect'],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/index_bg_'+num+'.json'
      });
    },
    methods: {
      dropdownInfoClick(name) {
        switch (name) {
          case 'signup':
            this.$router.push({
              name: 'signup'
            })
            break;
          default:
            break;
        }
      }
    }
  }
</script>

<style lang="less">
  @import url('./index.less');
</style>
