<template>
  <div class="register_page">
    <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="120" shapeType="circle" :particleSize="4"
      linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
    <div class="reg-modal">
      <Card>
        <p slot="title">注册</p>
        <router-link slot="extra" :to="{name:'index'}">回到首页</router-link>
        <Form ref="sign_up_form" :model="form" :rules="rule">
          <FormItem prop="username">
            <Input type="text" v-model="form.username" placeholder="请输入账号名|手机|邮箱">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" password v-model="form.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="passwords">
            <Input type="password" password v-model="form.passwords" placeholder="请确认密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="code" class="code">
            <Slider v-model="form.code" :marks="marks"></Slider>
          </FormItem>
          <FormItem>
            <Button type="primary" long @click="handleSubmit('sign_up_form')">同意《服务条款与隐私政策》并注册</Button>
          </FormItem>
        </Form>
        <Divider dashed />
        <p style="text-align: center;">注册即表示您同意我们的<a href="javascript:;" @click="drawer=true">服务条款与隐私政策</a></p>
        <p style="text-align: center;">已经拥有账户？ <router-link :to="{name:'user-signin'}">登录</router-link></p>
      </Card>
    </div>
    <Drawer title="服务条款与隐私政策" v-model="drawer" width="60" placement="left">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <Divider dashed />
      <Button type="primary" @click="drawer=false;handleSubmit('sign_up_form')">同意并注册</Button>
      <Button :to="{name:'index'}">不同意</Button>
    </Drawer>
  </div>
</template>
<script>

  import { mapActions } from 'vuex';
  export default {
    layout: 'index',
    asyncData (context) {
      return { title: context.app.head.title }
    },
    head(){
      return{
        title:this.title+'-注册'
      }
    },
    data() {
      var that = this;
      return {
        form: {
          username: '123456',
          password: '123456',
          passwords: '123456',
          code: 100
        },
        rule: {
          username: [
            {required: true,message: '请输入账号名|手机|邮箱',trigger: 'blur'},
            // {validator:function(rule, value, callback){
            //   if(!/^[a-z0-9_-]{3,16}$/.test(value)){
            //     callback("用户名含有非法字符");
            //   }else if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(value)){
            //     callback("用户名非手机号");
            //   }else if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value)){
            //     callback("用户名非邮箱");
            //   }
            // }}
          ],
          password: [
            {required: true,message: '请输入密码',trigger: 'blur'},
            {type: 'string',min: 6,message: '密码长度不能少于6位',trigger: 'blur'}
          ],
          passwords: [
            {required: true,message: '请输入密码',trigger: 'blur'},
            {type: 'string',min: 6,message: '密码长度不能少于6位',trigger: 'blur'},
            {
              validator: function(rule, value, callback) {
                if(that.form.password !== value){
                  callback("密码不一致");
                }else{
                  callback();
                }
              }
            }
          ],
          code: [{
            validator: function(rule, value, callback) {
              if(value < 100){
                callback("请将滑块移动到最右边");
              }else{
                callback();
              }
            }
          }]
        },
        marks: {
          0: {
            style: {
              color: '#ff0000'
            },
            label: this.$createElement('strong', '0')
          },
          100: {
            style: {
              color: '#19be6b'
            },
            label: this.$createElement('strong', '100')
          },
        },
        drawer: false
      }
    },
    methods: {
      ...mapActions({
        'userSignUp':'user/signup'
      }),
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.userSignUp({
              appid:'appid',
              appkey:'appkey',
              username:this.form.username,
              password:this.form.password,
              passwords:this.form.passwords,
              code:this.form.code
            }).then(result=>{
              this.Message.success('注册成功');
              setTimeout(function(){
                this.$router.push({name:'user-signin'});
              },1500)
            })
          }
        })
      }
    }
  }
</script>
<style lang="less">
  @import  url('./signup.less');
</style>
