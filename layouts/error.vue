<template>
  <div class="error">
    <div class="container">
      <h1>无法访问网站</h1>
      <h4>{{ error.message.toUpperCase() }}</h4>
      <template v-if="error.statusCode == 404">
        <p>Hi!真不巧,网页走丢了。</p>
      </template>
      <template v-else>
        <p>服务器异常</p>
      </template>
      <p>不如搜索你想要的或刷新试试</p>
      <div class="actions">
        <nuxt-link to="">刷新</nuxt-link>
        <nuxt-link :to="{ path: '/' }">返回首页</nuxt-link>
        <nuxt-link :to="{ path: '/sdk' }">打开SDK</nuxt-link>
        <a href="javascript:;" @click="$router.go(-1)">返回上一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
};
</script>

<style lang="less">
.error {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(39, 43, 52);
  color: white;
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 36px;
      margin-bottom: 16px;
    }
    h4 {
      font-size: 22px;
      margin-bottom: 10px;
    }
    p {
      letter-spacing: 2px;
      font-size: 16px;
    }
    .actions {
      margin-top: 20px;
      a {
        color: white;
        border-radius: 10px;
        border: 1px solid white;
        padding: 7px 15px;
        margin-right: 10px;
      }
    }
  }
}
</style>
