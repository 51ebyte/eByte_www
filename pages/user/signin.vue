<template>
  <div class="login_page">
    <div class="left">
      <div class="header">
        <router-link :to="{name:'index'}" class="logo"></router-link>
        <span class="lang">
          <span class="curr cn">中文</span>/
          <span class="en">En</span>
        </span>
      </div>
      <div class="main">
        <Card>
          <p slot="title">账号登录</p>
          <a href="javascrit:;" slot="extra" @click="scan=true">扫码登录</a>
          <Form ref="form" :model="form" :rules="rule">
            <FormItem prop="username">
              <Input type="text" v-model="form.username" placeholder="请输入账号名|手机|邮箱">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" long @click="handleSubmit('form')">登录</Button>
            </FormItem>
          </Form>
          <div class="link-group">
            <router-link :to="{name:'user-signup'}">免费注册</router-link>
            <router-link :to="{name:'user-recover'}">忘记密码</router-link>
          </div>
          <Divider dashed />
          <div class="three-parties-login">
            <span>其他登录方式：</span>
            <Button shape="circle" type="info" ghost>
              <Icon class="iconfont icon-github" size="16" />
              <span class="btn-text">Github</span>
            </Button>
            <Button shape="circle" type="info" ghost>
              <Icon class="iconfont icon-gitee" size="14" />
              <span class="btn-text">Gitee</span>
            </Button>
          </div>
        </Card>
        <Modal v-model="scan" title="扫码登录" :footer-hide="true" width="300">
          <p style="text-align: center;padding-bottom: 10px;">打开 微信 支付宝 扫二维码登录</p>
          <img :src="qrcode" style="margin: 0 auto;display: block;" />
        </Modal>
      </div>
      <div class="footer">
        <p>Copyright © 2020 51eByte.com 版权所有</p>
        <a href="http://www.beian.miit.gov.cn/">蜀ICP备19040469号</a>
      </div>
    </div>
    <div class="right">
      <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="100" shapeType="circle" :particleSize="4"
        linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
        :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
      <p class="bt">欢迎使用新账号</p>
      <p class="bt-tips">操作更便捷，访问更安全</p>
    </div>
  </div>
</template>

<script>
  import QRCode from 'qrcode'
  import { mapActions } from 'vuex';
  export default {
    layout: 'index',
    asyncData (context) {
      return { title: context.app.head.title }
    },
    head(){
      return{
        title:this.title+'-登录'
      }
    },
    data() {
      return {
        title:'',
        scan: false,
        qrcode: '',
        form: {
          username: '',
          password: ''
        },
        rule: {
          username: [{
            required: true,
            message: '请输入账号名|手机|邮箱',
            trigger: 'blur'
          }],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: '密码长度不能少于6位',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    mounted() {
      QRCode.toDataURL('I am a pony!', {
        color: {
          dark: "#333333FF",
          light: "#F0F0F0FF"
        },
        width: 240,
        type: 'image/png',
        quality: 0.3,
        margin: 1,
      }).then(url => {
        this.qrcode = url
      })
    },
    methods: {
      ...mapActions({
        'userSignIn':'user/signin'
      }),
      handleSubmit(name){
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.userSignIn({
              appid:'appid',
              appkey:'appkey',
              username:this.form.username,
              password:this.form.password
            }).then(result=>{
              console.log(result)
            })
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import url('./signin.less');
</style>
