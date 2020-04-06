<template>
  <Affix class="header">
    <div class="boxs">
      <div class="container">
        <router-link :to="{ name: 'zhifou' }" class="logo">
          <img src="../../../assets/logo/logo.svg" />
        </router-link>
        <Menu mode="horizontal" class="nav" :active-name="$route.name">
          <template v-for="(item, index) in menu">
            <template v-if="item.children">
              <Submenu :name="item.name">
                <template slot="title">
                  {{ item.text }}
                </template>
                <template v-for="(children, jndex) in item.children">
                  <MenuItem :name="children.name" :to="{ name: children.name }">{{ children.text }}</MenuItem>
                </template>
              </Submenu>
            </template>
            <template v-else>
              <MenuItem :name="item.name" :to="{ name: item.name }">{{ item.text }}</MenuItem>
            </template>
          </template>
        </Menu>
        <div class="search">
          <div class="input">
            <input type="text" placeholder="字节极客是干嘛的？" />
            <Icon type="ios-search-outline" />
          </div>
        </div>
        <div class="topbar">
          <router-link :to="{ name: 'user-signin' }" class="login">登录</router-link>
          <router-link :to="{ name: 'user-signup' }" class="register">免费注册</router-link>
        </div>
      </div>
    </div>
  </Affix>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'zhifou',
          text: '首页'
        },
        // {
        //   name:'product',
        //   text: '产品',
        //   children: [
        //     {
        //       name: 'sdk-eByteSDK_WeiXin',
        //       text: 'eByteSDK_WeiXin'
        //     },
        //     {
        //       name: 'sdk-eByteSDK_Alipay',
        //       text: 'eByteSDK_Alipay'
        //     }
        //   ]
        // },
        {
          name: 'zhifou-download',
          text: '下载'
        },
        {
          name: 'zhifou-answers',
          text: '问答'
        },
        {
          name: 'zhifou-app',
          text: '移动端'
        },
        {
          name: 'zhifou-about',
          text: '关于'
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
