<template>
  <div class="sign">
    <Avatar icon="ios-person" size="small"></Avatar>
    <Dropdown @on-click="DropdownClick">
      <router-link class="sign-btn" :to="{ name: 'user-signin' }">
        <span class="sign-name">登录</span>
        <Icon type="ios-arrow-down" color="#333333"></Icon>
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
</template>

<script>
  export default{
    methods:{
      DropdownClick(name) {
        switch (name) {
          case 'signup':
            this.$router.push({
              name: 'user-signup'
            });
            break;
          default:
            break;
        }
      }
    }
  }
</script>

<style lang="less">
@import url('./info.less');
</style>
