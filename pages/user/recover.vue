<template>
  <div class="recover_page">
    <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="120" shapeType="circle" :particleSize="4"
      linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
    <div class="header">
      <router-link :to="{name:'index'}" class="logo"></router-link>
      <span class="lang">
        <span class="curr cn">中文</span>/
        <span class="en">En</span>
      </span>
    </div>
    <div class="recover-modal">
      <Steps :current="step">
        <Step title="账号验证" content="请输入注册时的账号|手机"></Step>
        <Step title="安全认证" content=""></Step>
        <Step title="重置成功" content=""></Step>
      </Steps>
      <Divider />
      <Card>
        <p slot="title">《账号名|手机|邮箱》验证</p>
        <template v-if="step==0">
          <Row>
            <Col span="12" offset="6">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem prop="username" label="账号名|手机|邮箱">
                <Input type="text" v-model="formInline.username" placeholder="请输入账号名|手机|邮箱"></Input>
              </FormItem>
              <FormItem prop="code">
                <Slider v-model="formInline.code" :marks="marks"></Slider>
              </FormItem>
              <FormItem>
                <Button type="primary" long @click="handleSubmit('formInline')">验证</Button>
              </FormItem>
            </Form>
            </Col>
          </Row>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'index',
    asyncData (context) {
      return { title: context.app.head.title }
    },
    head(){
      return{
        title:this.title+'-找回密码'
      }
    },
    data() {
      return {
        title:'',
        step: 0,
        formInline: {
          username: '',
          code: 0
        },
        ruleInline: {
          username: [{
            required: true,
            message: '请输入账号名|手机|邮箱',
            trigger: 'blur'
          }],
          code: [{
            validator: function(rule, value, callback) {
              if (value < 100) {
                callback("请将滑块移动到最右边");
              } else {
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
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import url('./recover.less');
</style>
